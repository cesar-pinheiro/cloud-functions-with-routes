import AplicacoesRepository from '../repositories/AplicacoesRepository'
import IAplicacaoDTO from '../dtos/IAplicacaoDTO'

let aplicacoesRepository: AplicacoesRepository

export default class ShowAplicacaoByAppIdService {
    constructor () {
        aplicacoesRepository = new AplicacoesRepository()
    }
    public async execute(app_id: string): Promise<IAplicacaoDTO | undefined> {
        return aplicacoesRepository.findByAppId(app_id)
    }
}