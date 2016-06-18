"use strict";
var tsmvc_1 = require("tsmvc");
var inversify_1 = require("inversify");
//Current Import
var apiAccount_1 = require("../models/apiAccount");
var apiAccountDataRepositoryImpl = (function (_super) {
    __extends(apiAccountDataRepositoryImpl, _super);
    function apiAccountDataRepositoryImpl(requestDecorator, requestParser) {
        _super.call(this);
        this.requestDecorator = requestDecorator;
        this.parser = requestParser;
    }
    apiAccountDataRepositoryImpl.prototype.getModelType = function () {
        return apiAccount_1.apiAccount;
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{{id}} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiAccountDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accounts/{{id}}/'.replace('{{id}}', modelID), 'GET', null);
    };
    apiAccountDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accounts', 'GET', null);
    };
    //Finds all entities
    apiAccountDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accounts/' + query, 'GET', null);
    };
    apiAccountDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accounts', 'POST', modelItem);
    };
    apiAccountDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accounts/{{id}}/'.replace('{{id}}', modelID), 'DELETE', null);
    };
    apiAccountDataRepositoryImpl.prototype.saveItem = function (modelItem, modelId) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accounts/{{id}}/'.replace('{{id}}', modelId), 'PUT', modelItem);
    };
    apiAccountDataRepositoryImpl = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ApiRequestDecorator')),
        __param(1, inversify_1.inject('Parser')), 
        __metadata('design:paramtypes', [Object, Object])
    ], apiAccountDataRepositoryImpl);
    return apiAccountDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiAccountDataRepositoryImpl = apiAccountDataRepositoryImpl;
//# sourceMappingURL=apiAccountDataRepositoryImpl.js.map