import { Injectable } from '@angular/core';
import { GASTO } from './gasto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  gastos: GASTO[]=[];

  constructor() { }

  public agregarGasto(monto: number, gasto: string){
    this.gastos.push({monto,gasto});
  }

  public mostrarGastos() {
    return this.gastos;
  }
}