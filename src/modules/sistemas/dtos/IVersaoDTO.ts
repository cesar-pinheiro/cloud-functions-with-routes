export interface IAplicacao {
    id: any
    tipo: string
    nome: string 
  }
  
  export interface IVersao {
    major: number
    minor: number
    patch: number
  }

  export default interface IVersaoDTO {
    id: any
    aplicacao: IAplicacao
    versao: IVersao
    descricao: string
    data_criacao: Date
  }
