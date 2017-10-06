import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador';
import { COLABORADOR_ITEMS } from './colaborador-data';
import { findIndex } from 'lodash';

@Injectable()
export class ColaboradorService {
  private pItems = COLABORADOR_ITEMS;

  getColaboradorsFromData(): Colaborador[] {
    console.log(this.pItems);
    return this.pItems
  }

  addColaborador(colaborador: Colaborador) {
    this.pItems.push(colaborador);
    console.log(this.pItems);
  }

  updateColaborador(colaborador: Colaborador) {
    let index = findIndex(this.pItems, (p: Colaborador) => {
      return p.id === colaborador.id;
    });
    this.pItems[index] = colaborador;
  }

  deleteColaborador(colaborador: Colaborador) {
    this.pItems.splice(this.pItems.indexOf(colaborador), 1);
    console.log(this.pItems);
  }

}
