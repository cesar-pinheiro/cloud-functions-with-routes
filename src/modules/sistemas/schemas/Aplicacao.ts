import { Entity, Column, ObjectID, ObjectIdColumn, Index, CreateDateColumn, UpdateDateColumn, BeforeInsert, AfterInsert } from 'typeorm';
// import { ObjectID } from 'mongodb'

import IAplicacaoDTO from '../dtos/IAplicacaoDTO';


@Entity('aplicacoes')
class Aplicacao implements IAplicacaoDTO {

  @ObjectIdColumn({ name: '_id' })
  readonly _id: ObjectID

  @Column()
  @Index({ unique: true }) // o truque para funcionar o unique está na configuração 'synchronize: true' da conexão
  public app_id: string

  @Column()
  public nome: string
  
  @Column()
  public descricao: string
  
  @Column()
  public tecnologia: string
  
  @Column()
  public inativo: boolean

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  private updated_at: Date

  @BeforeInsert()
  private beforeInsertActions() {
    this.inativo = !!this.inativo;
  }
}

export default Aplicacao