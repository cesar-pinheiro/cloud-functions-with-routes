import { Router } from 'express'

import AplicacoesController from '../../modules/sistemas/controllers/AplicacoesController'
const aplicacoesController = new AplicacoesController()

import AplicacaoByAppIdController from '../../modules/sistemas/controllers/AplicacaoByAppIdController'
const aplicacaoByAppIdController = new AplicacaoByAppIdController()

import VersoesController from '../../modules/sistemas/controllers/VersoesController'
const versoesController = new VersoesController()

import LastVersaoAplicacaoController from '../../modules/sistemas/controllers/LastVersaoAplicacaoController'
const lastVersaoAplicacaoController = new LastVersaoAplicacaoController()


const routes = Router();

routes.route('/sistemas/aplicacoes')
    .post(aplicacoesController.create)

routes.route('/sistemas/aplicacoes/app_id/:app_id')
    .get(aplicacaoByAppIdController.show)

routes.route('/sistemas/versoes')
    .post(versoesController.create)

routes.route('/sistemas/versoes/aplicacao/:aplicacao_id/last')
    .get(lastVersaoAplicacaoController.show)

export default routes