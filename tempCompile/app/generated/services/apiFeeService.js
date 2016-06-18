"use strict";
var inversify_1 = require("inversify");
var apiFeeService = (function () {
    function apiFeeService(apiFeeDataLayer) {
        this.apiFeeDataLayer = apiFeeDataLayer;
    }
    apiFeeService.prototype.find = function (modelID) {
        return this.apiFeeDataLayer.find(modelID);
    };
    apiFeeService.prototype.findAll = function () {
        return this.apiFeeDataLayer.findAll();
    };
    apiFeeService.prototype.findAllWith = function (query) {
        return this.apiFeeDataLayer.findAllWith(query);
    };
    apiFeeService.prototype.addItem = function (modelItem) {
        return this.apiFeeDataLayer.addItem(modelItem);
    };
    apiFeeService.prototype.removeItem = function (modelID) {
        return this.apiFeeDataLayer.removeItem(modelID);
    };
    apiFeeService.prototype.saveItem = function (modelItem, modelId) {
        return this.apiFeeDataLayer.saveItem(modelItem, modelId);
    };
    apiFeeService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('apiFeeDataRepository')), 
        __metadata('design:paramtypes', [Object])
    ], apiFeeService);
    return apiFeeService;
}());
exports.apiFeeService = apiFeeService;
//# sourceMappingURL=apiFeeService.js.map