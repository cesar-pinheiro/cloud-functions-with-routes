import { Request, Response } from 'express';

import AppError from '../../../shared/errors/AppError'
import ShowLastVersaoAplicacaoService from '../services/ShowLastVersaoAplicacaoService'

export default class VersoesController {
    public async show(request: Request, response: Response): Promise<Response> {
        const { aplicacao_id } = request.params;

        if(!aplicacao_id) throw new AppError('Missing parameters')

        const showLastVersaoAplicacaoService = new ShowLastVersaoAplicacaoService()
        const versao = await showLastVersaoAplicacaoService.execute(aplicacao_id)
        return response.status(200).json(versao)
    }
}