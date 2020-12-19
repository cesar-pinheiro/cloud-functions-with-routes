import { Request, Response } from 'express';

import AppError from '../../../shared/errors/AppError'
import CreateVersaoService from '../services/CreateVersaoService'
import ICreateVersaoDTO from '../dtos/ICreateVersaoDTO'

export default class VersoesController {
    public async create(request: Request, response: Response): Promise<Response> {
        const data: ICreateVersaoDTO = request.body;

        if(
            !data.aplicacao ||
            !data.aplicacao.id ||
            !data.aplicacao.tipo ||
            !data.aplicacao.nome ||
            !data.versao ||
            !data.versao.major ||
            !data.versao.minor ||
            !data.versao.patch
        ) {
            throw new AppError('Missing parameters')
        }

        const createVersaoService = new CreateVersaoService()
        const versao = await createVersaoService.execute(data)
        return response.status(201).json(versao)
    }
}