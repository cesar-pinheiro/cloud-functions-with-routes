import IVersaoDTO from './IVersaoDTO';

type ICreateVersaoDTO = Omit<IVersaoDTO, 'id'>

export default ICreateVersaoDTO