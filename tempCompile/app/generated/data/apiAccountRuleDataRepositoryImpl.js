"use strict";
var tsmvc_1 = require("tsmvc");
var inversify_1 = require("inversify");
//Current Import
var apiAccountRule_1 = require("../models/apiAccountRule");
var apiAccountRuleDataRepositoryImpl = (function (_super) {
    __extends(apiAccountRuleDataRepositoryImpl, _super);
    function apiAccountRuleDataRepositoryImpl(requestDecorator, requestParser) {
        _super.call(this);
        this.requestDecorator = requestDecorator;
        this.parser = requestParser;
    }
    apiAccountRuleDataRepositoryImpl.prototype.getModelType = function () {
        return apiAccountRule_1.apiAccountRule;
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{{id}} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiAccountRuleDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountrules/{{id}}/'.replace('{{id}}', modelID), 'GET', null);
    };
    apiAccountRuleDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accountrules', 'GET', null);
    };
    //Finds all entities
    apiAccountRuleDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accountrules/' + query, 'GET', null);
    };
    apiAccountRuleDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountrules', 'POST', modelItem);
    };
    apiAccountRuleDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountrules/{{id}}/'.replace('{{id}}', modelID), 'DELETE', null);
    };
    apiAccountRuleDataRepositoryImpl.prototype.saveItem = function (modelItem, modelId) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountrules/{{id}}/'.replace('{{id}}', modelId), 'PUT', modelItem);
    };
    apiAccountRuleDataRepositoryImpl = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ApiRequestDecorator')),
        __param(1, inversify_1.inject('Parser')), 
        __metadata('design:paramtypes', [Object, Object])
    ], apiAccountRuleDataRepositoryImpl);
    return apiAccountRuleDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiAccountRuleDataRepositoryImpl = apiAccountRuleDataRepositoryImpl;
//# sourceMappingURL=apiAccountRuleDataRepositoryImpl.js.map