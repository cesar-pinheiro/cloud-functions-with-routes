import IAplicacaoDTO from './IAplicacaoDTO';

type ICreateAplicacaoDTO = Omit<IAplicacaoDTO, '_id' | 'inativo'>

export default ICreateAplicacaoDTO