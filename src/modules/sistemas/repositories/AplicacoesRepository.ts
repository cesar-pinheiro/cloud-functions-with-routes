import { getMongoRepository, MongoRepository } from 'typeorm'

import Aplicacao from '../schemas/Aplicacao'
import IAplicacaoDTO from '../dtos/IAplicacaoDTO'
import ICreateAplicacaoDTO from '../dtos/ICreateAplicacaoDTO'

export default class AplicacoesRepository {
    private ormRepository: MongoRepository<Aplicacao>

    constructor() {
        this.ormRepository = getMongoRepository(Aplicacao, 'mongo-sistema')
    }

    public async create(data: ICreateAplicacaoDTO): Promise<IAplicacaoDTO> {
        const aplicacao = this.ormRepository.create(data)
        return this.ormRepository.save(aplicacao)
    }

    public async findByAppId(app_id: string): Promise<IAplicacaoDTO | undefined> {
        return this.ormRepository.findOne({ where: { app_id } })
    }
}