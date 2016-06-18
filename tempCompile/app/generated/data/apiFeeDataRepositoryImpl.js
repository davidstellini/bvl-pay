"use strict";
var tsmvc_1 = require("tsmvc");
var inversify_1 = require("inversify");
//Current Import
var apiFee_1 = require("../models/apiFee");
//Linked Resources
var apiFeeDataRepositoryImpl = (function (_super) {
    __extends(apiFeeDataRepositoryImpl, _super);
    function apiFeeDataRepositoryImpl(requestDecorator, requestParser) {
        _super.call(this);
        this.requestDecorator = requestDecorator;
        this.parser = requestParser;
    }
    apiFeeDataRepositoryImpl.prototype.getModelType = function () {
        return apiFee_1.apiFee;
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{{id}} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiFeeDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/fees/{{id}}/'.replace('{{id}}', modelID), 'GET', null);
    };
    apiFeeDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/fees', 'GET', null);
    };
    //Finds all entities
    apiFeeDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/fees/' + query, 'GET', null);
    };
    apiFeeDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/fees', 'POST', modelItem);
    };
    apiFeeDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/fees/{{id}}/'.replace('{{id}}', modelID), 'DELETE', null);
    };
    apiFeeDataRepositoryImpl.prototype.saveItem = function (modelItem, modelId) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/fees/{{id}}/'.replace('{{id}}', modelId), 'PUT', modelItem);
    };
    apiFeeDataRepositoryImpl = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ApiRequestDecorator')),
        __param(1, inversify_1.inject('Parser')), 
        __metadata('design:paramtypes', [Object, Object])
    ], apiFeeDataRepositoryImpl);
    return apiFeeDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiFeeDataRepositoryImpl = apiFeeDataRepositoryImpl;
//# sourceMappingURL=apiFeeDataRepositoryImpl.js.map