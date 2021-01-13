import VersoesRepository from '../repositories/VersoesRepository'
import IVersaoDTO from '../dtos/IVersaoDTO'

let versoesRepository: VersoesRepository

export default class ShowLastVersaoAplicacaoService {
    constructor () {
        versoesRepository = new VersoesRepository()
    }
    public async execute(aplicacao_id: string): Promise<IVersaoDTO | undefined> {
        return versoesRepository.findLastByaplicacao_id(aplicacao_id)
    }
}