import { Request, Response } from 'express';

import AppError from '../../../shared/errors/AppError'
import ShowAplicacaoByAppIdService from '../services/ShowAplicacaoByAppIdService'

export default class AplicacaoByAppIdController {
    public async show(request: Request, response: Response): Promise<Response> {
        const { app_id } = request.params;

        if(!app_id) throw new AppError('Missing parameters')

        const showAplicacaoByAppIdService = new ShowAplicacaoByAppIdService()
        const aplicacao = await showAplicacaoByAppIdService.execute(app_id)
        return response.status(200).json(aplicacao)
    }
}