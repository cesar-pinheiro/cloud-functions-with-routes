import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

import createConnections from '../config/typeorm'
import AppError from '../errors/AppError'
import routes from './routes'


const app = express();
app.use(express.json());

Sentry.init({
    dsn: "https://58d1a93fe0214cc69fe03fefc8601368@o437500.ingest.sentry.io/5584931",
    integrations: [
        // habilitar rastreamento de chamadas HTTP
        new Sentry.Integrations.Http({ tracing: true }),
        // habilitar rastreamento de middleware Express.js
        new Tracing.Integrations.Express({ app }),
    ],
    /* Recomendado ajustar este valor na produção ou usar tracesSampler para um controle
       mais preciso */
    tracesSampleRate: 1.0,
});

/* Valida a conexão com o banco de dados
   Importante que este seja executado antes da definição das rotas */
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
            createConnections.catch(err => {
                console.log(`Failed initialization on typeorm: ${err}`)
                response.status(500).json({
                    status: 'error',
                    message: 'Internal server error'
                })
                throw new Error(err)
            })
    }
)

app.use(routes)

/* RequestHandler cria um contexto de execução separado usando domínios, de modo que cada
   transação / span / breadcrumb seja anexado à sua própria instância de Hub */
app.use(Sentry.Handlers.requestHandler());

/* TracingHandler cria um rastreamento para cada solicitação recebida */
app.use(Sentry.Handlers.tracingHandler());

/* O errorHandler deve estar antes de qualquer outro middleware de erro e depois
   de todos os controllers */
app.use(Sentry.Handlers.errorHandler());

/* Necessária a instalação e importação da biblioteca 'express-async-errors' para que o
   express trate de forma assincrona o midlleware de erro */
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                status: 'error',
                message: err.message
            });
        }
        console.error(err);
        return response.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
);

export default app
