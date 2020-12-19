import { Entity, Column, ObjectIdColumn, CreateDateColumn, BeforeInsert } from 'typeorm';
import { ObjectID } from 'mongodb'

import IVersaoDTO, { IVersao } from '../dtos/IVersaoDTO';

interface IAplicacao {
  id: ObjectID
  tipo: string
  nome: string
}

@Entity('versoes')
class Versao implements IVersaoDTO {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  aplicacao: IAplicacao

  @Column()
  versao: IVersao
  
  @Column()
  descricao: string

  @CreateDateColumn()
  data_criacao: Date

  @BeforeInsert()
  private async toObjectId() {
    this.aplicacao.id = new ObjectID(String(this.aplicacao.id))
  }

}

export default Versao
