"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var colaborador_data_1 = require("./colaborador-data");
var lodash_1 = require("lodash");
var ColaboradorService = (function () {
    function ColaboradorService() {
        this.pItems = colaborador_data_1.COLABORADOR_ITEMS;
    }
    ColaboradorService.prototype.getColaboradorsFromData = function () {
        console.log(this.pItems);
        return this.pItems;
    };
    ColaboradorService.prototype.addColaborador = function (colaborador) {
        this.pItems.push(colaborador);
        console.log(this.pItems);
    };
    ColaboradorService.prototype.updateColaborador = function (colaborador) {
        var index = lodash_1.findIndex(this.pItems, function (p) {
            return p.id === colaborador.id;
        });
        this.pItems[index] = colaborador;
    };
    ColaboradorService.prototype.deleteColaborador = function (colaborador) {
        this.pItems.splice(this.pItems.indexOf(colaborador), 1);
        console.log(this.pItems);
    };
    return ColaboradorService;
}());
ColaboradorService = __decorate([
    core_1.Injectable()
], ColaboradorService);
exports.ColaboradorService = ColaboradorService;
//# sourceMappingURL=colaborador.service.js.map