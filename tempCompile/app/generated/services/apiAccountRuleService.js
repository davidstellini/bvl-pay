"use strict";
var inversify_1 = require("inversify");
var apiAccountRuleService = (function () {
    function apiAccountRuleService(apiAccountPermissionDataLayer, apiAccountRuleDataLayer) {
        this.apiAccountPermissionDataLayer = apiAccountPermissionDataLayer;
        this.apiAccountRuleDataLayer = apiAccountRuleDataLayer;
    }
    apiAccountRuleService.prototype.find = function (modelID) {
        return this.apiAccountRuleDataLayer.find(modelID);
    };
    apiAccountRuleService.prototype.findAll = function () {
        return this.apiAccountRuleDataLayer.findAll();
    };
    apiAccountRuleService.prototype.findAllWith = function (query) {
        return this.apiAccountRuleDataLayer.findAllWith(query);
    };
    apiAccountRuleService.prototype.addItem = function (modelItem) {
        return this.apiAccountRuleDataLayer.addItem(modelItem);
    };
    apiAccountRuleService.prototype.removeItem = function (modelID) {
        return this.apiAccountRuleDataLayer.removeItem(modelID);
    };
    apiAccountRuleService.prototype.saveItem = function (modelItem, modelId) {
        return this.apiAccountRuleDataLayer.saveItem(modelItem, modelId);
    };
    apiAccountRuleService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('apiAccountPermissionDataRepository')),
        __param(1, inversify_1.inject('apiAccountRuleDataRepository')), 
        __metadata('design:paramtypes', [Object, Object])
    ], apiAccountRuleService);
    return apiAccountRuleService;
}());
exports.apiAccountRuleService = apiAccountRuleService;
//# sourceMappingURL=apiAccountRuleService.js.map