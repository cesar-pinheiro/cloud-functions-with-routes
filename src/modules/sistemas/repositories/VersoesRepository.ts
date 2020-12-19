import { getMongoRepository, MongoRepository } from 'typeorm'
import { ObjectID } from 'mongodb'

import Versao from '../schemas/Versao'
import ICreateVersaoDTO from '../dtos/ICreateVersaoDTO'

export default class VersoesRepository {
    private ormRepository: MongoRepository<Versao>

    constructor() {
        this.ormRepository = getMongoRepository(Versao, 'mongo-sistema')
    }

    public async create(data: ICreateVersaoDTO): Promise<Versao> {
        const versao = this.ormRepository.create(data)
        return this.ormRepository.save(versao)
    }

    public async findLastByaplicacao_id(aplicacao_id: string): Promise<Versao | undefined> {
        return this.ormRepository.findOne({ 
            where: { "aplicacao.id": new ObjectID(aplicacao_id) }, 
            order: { data_criacao: 'DESC' }
        })
    }
}