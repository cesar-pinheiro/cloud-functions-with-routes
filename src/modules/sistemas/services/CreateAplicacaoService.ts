import AplicacoesRepository from '../repositories/AplicacoesRepository'
import IAplicacaoDTO from '../dtos/IAplicacaoDTO'
import ICreateAplicacaoDTO from '../dtos/ICreateAplicacaoDTO'

let aplicacoesRepository: AplicacoesRepository

export default class CreateAplicacaoService {
    constructor () {
        aplicacoesRepository = new AplicacoesRepository()
    }
    public async execute(data: ICreateAplicacaoDTO): Promise<IAplicacaoDTO> {
        return aplicacoesRepository.create(data)
    }
}