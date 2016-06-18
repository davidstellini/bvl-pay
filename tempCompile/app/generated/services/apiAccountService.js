"use strict";
var inversify_1 = require("inversify");
var apiAccountService = (function () {
    function apiAccountService(apiAccountEntryDataLayer, apiAccountPermissionDataLayer, apiAccountDataLayer) {
        this.apiAccountEntryDataLayer = apiAccountEntryDataLayer;
        this.apiAccountPermissionDataLayer = apiAccountPermissionDataLayer;
        this.apiAccountDataLayer = apiAccountDataLayer;
    }
    apiAccountService.prototype.find = function (modelID) {
        return this.apiAccountDataLayer.find(modelID);
    };
    apiAccountService.prototype.findAll = function () {
        return this.apiAccountDataLayer.findAll();
    };
    apiAccountService.prototype.findAllWith = function (query) {
        return this.apiAccountDataLayer.findAllWith(query);
    };
    apiAccountService.prototype.addItem = function (modelItem) {
        return this.apiAccountDataLayer.addItem(modelItem);
    };
    apiAccountService.prototype.removeItem = function (modelID) {
        return this.apiAccountDataLayer.removeItem(modelID);
    };
    apiAccountService.prototype.saveItem = function (modelItem, modelId) {
        return this.apiAccountDataLayer.saveItem(modelItem, modelId);
    };
    apiAccountService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('apiAccountEntryDataRepository')),
        __param(1, inversify_1.inject('apiAccountPermissionDataRepository')),
        __param(2, inversify_1.inject('apiAccountDataRepository')), 
        __metadata('design:paramtypes', [Object, Object, Object])
    ], apiAccountService);
    return apiAccountService;
}());
exports.apiAccountService = apiAccountService;
//# sourceMappingURL=apiAccountService.js.map