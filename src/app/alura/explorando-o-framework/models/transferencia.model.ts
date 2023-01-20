export interface ITransferencia {
  id?: number | string;
  valor: number;
  destino: string | number;
  data?: string;
}