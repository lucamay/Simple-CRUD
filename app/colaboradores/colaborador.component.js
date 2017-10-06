"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var colaborador_service_1 = require("./colaborador.service");
var lodash_1 = require("lodash");
var ColaboradorComponent = (function () {
    function ColaboradorComponent(_colaboradorService) {
        this._colaboradorService = _colaboradorService;
        this.colaboradorForm = false;
        this.editColaboradorForm = false;
        this.newColaborador = {};
        this.editedColaborador = {};
    }
    ColaboradorComponent.prototype.ngOnInit = function () {
        this.getColaboradors();
    };
    ColaboradorComponent.prototype.getColaboradors = function () {
        this.colaboradors = this._colaboradorService.getColaboradorsFromData();
    };
    ColaboradorComponent.prototype.showEditColaboradorForm = function (colaborador) {
        if (!colaborador) {
            this.colaboradorForm = false;
            return;
        }
        this.editColaboradorForm = true;
        this.editedColaborador = lodash_1.clone(colaborador);
    };
    ColaboradorComponent.prototype.showAddColaboradorForm = function () {
        // resets form if edited colaborador
        if (this.colaboradors.length) {
            this.newColaborador = {};
        }
        this.colaboradorForm = true;
        this.isNewForm = true;
    };
    ColaboradorComponent.prototype.saveColaborador = function (colaborador) {
        if (this.isNewForm) {
            // add a new colaborador
            this._colaboradorService.addColaborador(colaborador);
        }
        this.colaboradorForm = false;
    };
    ColaboradorComponent.prototype.removeColaborador = function (colaborador) {
        this._colaboradorService.deleteColaborador(colaborador);
    };
    ColaboradorComponent.prototype.updateColaborador = function () {
        this._colaboradorService.updateColaborador(this.editedColaborador);
        this.editColaboradorForm = false;
        this.editedColaborador = {};
    };
    ColaboradorComponent.prototype.cancelNewColaborador = function () {
        this.newColaborador = {};
        this.colaboradorForm = false;
    };
    ColaboradorComponent.prototype.cancelEdits = function () {
        this.editedColaborador = {};
        this.editColaboradorForm = false;
    };
    return ColaboradorComponent;
}());
ColaboradorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'colaborador.template.html'
    }),
    __metadata("design:paramtypes", [colaborador_service_1.ColaboradorService])
], ColaboradorComponent);
exports.ColaboradorComponent = ColaboradorComponent;
//# sourceMappingURL=colaborador.component.js.map