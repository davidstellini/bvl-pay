"use strict";
var inversify_1 = require("inversify");
var apiAccountEntryService = (function () {
    function apiAccountEntryService(apiAccountDataLayer, apiAccountEntryDataLayer) {
        this.apiAccountDataLayer = apiAccountDataLayer;
        this.apiAccountEntryDataLayer = apiAccountEntryDataLayer;
    }
    apiAccountEntryService.prototype.find = function (modelID) {
        return this.apiAccountEntryDataLayer.find(modelID);
    };
    apiAccountEntryService.prototype.findAll = function () {
        return this.apiAccountEntryDataLayer.findAll();
    };
    apiAccountEntryService.prototype.findAllWith = function (query) {
        return this.apiAccountEntryDataLayer.findAllWith(query);
    };
    apiAccountEntryService.prototype.addItem = function (modelItem) {
        return this.apiAccountEntryDataLayer.addItem(modelItem);
    };
    apiAccountEntryService.prototype.removeItem = function (modelID) {
        return this.apiAccountEntryDataLayer.removeItem(modelID);
    };
    apiAccountEntryService.prototype.saveItem = function (modelItem, modelId) {
        return this.apiAccountEntryDataLayer.saveItem(modelItem, modelId);
    };
    apiAccountEntryService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('apiAccountDataRepository')),
        __param(1, inversify_1.inject('apiAccountEntryDataRepository')), 
        __metadata('design:paramtypes', [Object, Object])
    ], apiAccountEntryService);
    return apiAccountEntryService;
}());
exports.apiAccountEntryService = apiAccountEntryService;
//# sourceMappingURL=apiAccountEntryService.js.map