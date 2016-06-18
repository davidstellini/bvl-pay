"use strict";
var tsmvc_1 = require("tsmvc");
var inversify_1 = require("inversify");
//Current Import
var apiAccountPermission_1 = require("../models/apiAccountPermission");
var apiAccountPermissionDataRepositoryImpl = (function (_super) {
    __extends(apiAccountPermissionDataRepositoryImpl, _super);
    function apiAccountPermissionDataRepositoryImpl(requestDecorator, requestParser) {
        _super.call(this);
        this.requestDecorator = requestDecorator;
        this.parser = requestParser;
    }
    apiAccountPermissionDataRepositoryImpl.prototype.getModelType = function () {
        return apiAccountPermission_1.apiAccountPermission;
    };
    //CRUD Operations - Only here for the sake of verbosity and flexibility.
    //Any operations that have standard http://url/up/to/entity/{{id}} are
    //handled out of the box by APIRepository (this is the overriden method).
    apiAccountPermissionDataRepositoryImpl.prototype.find = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountpermissions/{{id}}/'.replace('{{id}}', modelID), 'GET', null);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.findAll = function () {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accountpermissions', 'GET', null);
    };
    //Finds all entities
    apiAccountPermissionDataRepositoryImpl.prototype.findAllWith = function (query) {
        return this.buildRequestAndParseAsModelList('https://api.fundsrouter.com/accountpermissions/' + query, 'GET', null);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.addItem = function (modelItem) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountpermissions', 'POST', modelItem);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.removeItem = function (modelID) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountpermissions/{{id}}/'.replace('{{id}}', modelID), 'DELETE', null);
    };
    apiAccountPermissionDataRepositoryImpl.prototype.saveItem = function (modelItem, modelId) {
        return this.buildRequestAndParseAsModel('https://api.fundsrouter.com/accountpermissions/{{id}}/'.replace('{{id}}', modelId), 'PUT', modelItem);
    };
    apiAccountPermissionDataRepositoryImpl = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('ApiRequestDecorator')),
        __param(1, inversify_1.inject('Parser')), 
        __metadata('design:paramtypes', [Object, Object])
    ], apiAccountPermissionDataRepositoryImpl);
    return apiAccountPermissionDataRepositoryImpl;
}(tsmvc_1.ApiRepository));
exports.apiAccountPermissionDataRepositoryImpl = apiAccountPermissionDataRepositoryImpl;
//# sourceMappingURL=apiAccountPermissionDataRepositoryImpl.js.map