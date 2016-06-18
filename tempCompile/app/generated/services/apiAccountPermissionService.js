"use strict";
var inversify_1 = require("inversify");
var apiAccountPermissionService = (function () {
    function apiAccountPermissionService(apiAccountRuleDataLayer, apiAccountDataLayer, apiAccountPermissionDataLayer) {
        this.apiAccountRuleDataLayer = apiAccountRuleDataLayer;
        this.apiAccountDataLayer = apiAccountDataLayer;
        this.apiAccountPermissionDataLayer = apiAccountPermissionDataLayer;
    }
    apiAccountPermissionService.prototype.find = function (modelID) {
        return this.apiAccountPermissionDataLayer.find(modelID);
    };
    apiAccountPermissionService.prototype.findAll = function () {
        return this.apiAccountPermissionDataLayer.findAll();
    };
    apiAccountPermissionService.prototype.findAllWith = function (query) {
        return this.apiAccountPermissionDataLayer.findAllWith(query);
    };
    apiAccountPermissionService.prototype.addItem = function (modelItem) {
        return this.apiAccountPermissionDataLayer.addItem(modelItem);
    };
    apiAccountPermissionService.prototype.removeItem = function (modelID) {
        return this.apiAccountPermissionDataLayer.removeItem(modelID);
    };
    apiAccountPermissionService.prototype.saveItem = function (modelItem, modelId) {
        return this.apiAccountPermissionDataLayer.saveItem(modelItem, modelId);
    };
    apiAccountPermissionService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('apiAccountRuleDataRepository')),
        __param(1, inversify_1.inject('apiAccountDataRepository')),
        __param(2, inversify_1.inject('apiAccountPermissionDataRepository')), 
        __metadata('design:paramtypes', [Object, Object, Object])
    ], apiAccountPermissionService);
    return apiAccountPermissionService;
}());
exports.apiAccountPermissionService = apiAccountPermissionService;
//# sourceMappingURL=apiAccountPermissionService.js.map