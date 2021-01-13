import { Request, Response } from 'express';

import AppError from '../../../shared/errors/AppError'
import CreateAplicacaoService from '../services/CreateAplicacaoService'
import ICreateAplicacaoDTO from '../dtos/ICreateAplicacaoDTO'

export default class AplicacoesController {
    public async create(request: Request, response: Response): Promise<Response> {
        
        const data: ICreateAplicacaoDTO = request.body;
        if(
            !data.app_id ||
            !data.nome ||
            !data.descricao ||
            !data.tecnologia
        ) {
            throw new AppError('Missing parameters')
        }

        const createAplicacaoService = new CreateAplicacaoService()
        const aplicacao = await createAplicacaoService.execute(data)
        return response.status(201).json(aplicacao)
    }
}