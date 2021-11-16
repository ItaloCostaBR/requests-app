import {Funcionario} from './funcionario.model';
import {Departamento} from './departamento.model';
import {Model} from '../core/model';

export class Movimentacao extends Model {
  funcionario:	Funcionario;
  dataHora:	Date;
  status:	string;
  descricao:	string;
}

export class Requisicao extends Model {
  solicitante: Funcionario;
  dataAbertura: any;
  ultimaAtualizacao: any;
  descricao: string;
  status: string;
  destino: Departamento;
  movimentacaoes: Movimentacao[];
}
