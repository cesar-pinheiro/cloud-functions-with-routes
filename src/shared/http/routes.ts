import { Router } from 'express'

import VersoesController from '../../modules/sistemas/controllers/VersoesController'
import LastVersaoAplicacaoController from '../../modules/sistemas/controllers/LastVersaoAplicacaoController'

const versoesController = new VersoesController()
const lastVersaoAplicacaoController = new LastVersaoAplicacaoController()


const routes = Router();

routes.post('/sistemas/versoes', versoesController.create)
routes.get('/sistemas/versoes/aplicacao/:aplicacao_id/last', lastVersaoAplicacaoController.show)

export default routes