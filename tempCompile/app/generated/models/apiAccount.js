"use strict";
var tsmvc_1 = require("tsmvc");
var typedjson_1 = require("typedjson");
var apiMoney_1 = require("./dep/apiMoney");
var apiAccount = (function (_super) {
    __extends(apiAccount, _super);
    function apiAccount() {
        _super.apply(this, arguments);
    }
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', apiMoney_1.apiMoney)
    ], apiAccount.prototype, "balance", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccount.prototype, "currency", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccount.prototype, "accountNumber", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccount.prototype, "createdOn", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccount.prototype, "friendlyName", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccount.prototype, "accountEntries", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccount.prototype, "accountPermissions", void 0);
    apiAccount = __decorate([
        typedjson_1.JsonObject, 
        __metadata('design:paramtypes', [])
    ], apiAccount);
    return apiAccount;
}(tsmvc_1.Model));
exports.apiAccount = apiAccount;
//# sourceMappingURL=apiAccount.js.map