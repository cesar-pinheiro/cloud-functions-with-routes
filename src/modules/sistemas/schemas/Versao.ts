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

  @ObjectIdColumn({ name: '_id' })
  readonly id: ObjectID

  @Column()
  public aplicacao: IAplicacao

  @Column()
  public versao: IVersao
  
  @Column()
  public descricao: string

  @CreateDateColumn()
  public data_criacao: Date

  @BeforeInsert()
  private async toObjectId() {
    this.aplicacao.id = new ObjectID(String(this.aplicacao.id))
  }

}

export default Versao
