import VersoesRepository from '../repositories/VersoesRepository'
import IVersaoDTO from '../dtos/IVersaoDTO'
import ICreateVersaoDTO from '../dtos/ICreateVersaoDTO'

let versoesRepository: VersoesRepository

export default class CreateVersaoService {
    constructor () {
        versoesRepository = new VersoesRepository()
    }
    public async execute(data: ICreateVersaoDTO): Promise<IVersaoDTO> {
        return versoesRepository.create(data)
    }
}