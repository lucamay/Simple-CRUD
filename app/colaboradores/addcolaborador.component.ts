import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from './colaborador.service';
import { Colaborador } from './colaborador';
import { clone } from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'add-colaborador.template.html'
})

export class AddColaboradorComponent implements OnInit {
  colaboradors: Colaborador[];
  colaboradorForm: boolean = false;
  editColaboradorForm: boolean = false;
  isNewForm: boolean;
  newColaborador: any = {};
  editedColaborador: any = {};

  constructor(private _colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.getColaboradors();
  }

  getColaboradors() {
    this.colaboradors = this._colaboradorService.getColaboradorsFromData();
  }

  showEditColaboradorForm(colaborador: Colaborador) {
    if(!colaborador) {
      this.colaboradorForm = false;
      return;
    }
    this.editColaboradorForm = true;
    this.editedColaborador = clone(colaborador);
  }

  showAddColaboradorForm() {
    // resets form if edited colaborador
    if(this.colaboradors.length) {
      this.newColaborador = {};
    }
    this.colaboradorForm = true;
    this.isNewForm = true;
  }

  saveColaborador(colaborador: Colaborador) {
    if(this.isNewForm) {
      // add a new colaborador
      this._colaboradorService.addColaborador(colaborador);
    }
    this.colaboradorForm = false;
  }

  removeColaborador(colaborador: Colaborador) {
    this._colaboradorService.deleteColaborador(colaborador);
  }

  updateColaborador() {
    this._colaboradorService.updateColaborador(this.editedColaborador);
    this.editColaboradorForm = false;
    this.editedColaborador = {};
  }

  cancelNewColaborador() {
    this.newColaborador = {};
    this.colaboradorForm = false;
  }

  cancelEdits() {
    this.editedColaborador = {};
    this.editColaboradorForm = false;
  }

}
