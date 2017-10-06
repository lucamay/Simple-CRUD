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
var AddColaboradorComponent = (function () {
    function AddColaboradorComponent(_colaboradorService) {
        this._colaboradorService = _colaboradorService;
        this.colaboradorForm = false;
        this.editColaboradorForm = false;
        this.newColaborador = {};
        this.editedColaborador = {};
    }
    AddColaboradorComponent.prototype.ngOnInit = function () {
        this.getColaboradors();
    };
    AddColaboradorComponent.prototype.getColaboradors = function () {
        this.colaboradors = this._colaboradorService.getColaboradorsFromData();
    };
    AddColaboradorComponent.prototype.showEditColaboradorForm = function (colaborador) {
        if (!colaborador) {
            this.colaboradorForm = false;
            return;
        }
        this.editColaboradorForm = true;
        this.editedColaborador = lodash_1.clone(colaborador);
    };
    AddColaboradorComponent.prototype.showAddColaboradorForm = function () {
        // resets form if edited colaborador
        if (this.colaboradors.length) {
            this.newColaborador = {};
        }
        this.colaboradorForm = true;
        this.isNewForm = true;
    };
    AddColaboradorComponent.prototype.saveColaborador = function (colaborador) {
        if (this.isNewForm) {
            // add a new colaborador
            this._colaboradorService.addColaborador(colaborador);
        }
        this.colaboradorForm = false;
    };
    AddColaboradorComponent.prototype.removeColaborador = function (colaborador) {
        this._colaboradorService.deleteColaborador(colaborador);
    };
    AddColaboradorComponent.prototype.updateColaborador = function () {
        this._colaboradorService.updateColaborador(this.editedColaborador);
        this.editColaboradorForm = false;
        this.editedColaborador = {};
    };
    AddColaboradorComponent.prototype.cancelNewColaborador = function () {
        this.newColaborador = {};
        this.colaboradorForm = false;
    };
    AddColaboradorComponent.prototype.cancelEdits = function () {
        this.editedColaborador = {};
        this.editColaboradorForm = false;
    };
    return AddColaboradorComponent;
}());
AddColaboradorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'add-colaborador.template.html'
    }),
    __metadata("design:paramtypes", [colaborador_service_1.ColaboradorService])
], AddColaboradorComponent);
exports.AddColaboradorComponent = AddColaboradorComponent;
//# sourceMappingURL=addcolaborador.component.js.map