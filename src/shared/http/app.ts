import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import AppError from '../errors/AppError'
import routes from './routes'
import '../config/typeorm'

const app = express()
app.use(express.json())
app.use(routes)

/* Necessária a instalação e importação da biblioteca 'express-async-errors' para que o
   o express trate de forma assincrona o midlleware de erro */
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
