"use strict";
var tsmvc_1 = require("tsmvc");
var inversify_1 = require("inversify");
//Current Import
var apiAccountEntry_1 = require("../models/apiAccountEntry");
var apiAccountEntryDataRepositoryImpl = (function (_super) {
    __extends(apiAccountEntryDataRepositoryImpl, _super);
    function apiAccountEntryDataRepositoryImpl(requestDecorator, requestParser) {
        _super.call(this);
        this.requestDecorator = requestDecorator;
        this.parser = requestParser;
    }
    apiAccountEntryDataRepositoryImpl.prototype.getModelType = function () {
        return apiAccountEntry_1.apiAccountEntry;
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{{id}} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiAccountEntryDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountentries/{{id}}/'.replace('{{id}}', modelID), 'GET', null);
    };
    apiAccountEntryDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accountentries', 'GET', null);
    };
    //Finds all entities
    apiAccountEntryDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accountentries/' + query, 'GET', null);
    };
    apiAccountEntryDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountentries', 'POST', modelItem);
    };
    apiAccountEntryDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountentries/{{id}}/'.replace('{{id}}', modelID), 'DELETE', null);
    };
    apiAccountEntryDataRepositoryImpl.prototype.saveItem = function (modelItem, modelId) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountentries/{{id}}/'.replace('{{id}}', modelId), 'PUT', modelItem);
    };
    apiAccountEntryDataRepositoryImpl = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ApiRequestDecorator')),
        __param(1, inversify_1.inject('Parser')), 
        __metadata('design:paramtypes', [Object, Object])
    ], apiAccountEntryDataRepositoryImpl);
    return apiAccountEntryDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiAccountEntryDataRepositoryImpl = apiAccountEntryDataRepositoryImpl;
//# sourceMappingURL=apiAccountEntryDataRepositoryImpl.js.map