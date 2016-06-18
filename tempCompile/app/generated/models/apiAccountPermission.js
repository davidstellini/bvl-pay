"use strict";
var tsmvc_1 = require("tsmvc");
var typedjson_1 = require("typedjson");
var apiLegalEntity_1 = require("./dep/apiLegalEntity");
var apiAccountPermission = (function (_super) {
    __extends(apiAccountPermission, _super);
    function apiAccountPermission() {
        _super.apply(this, arguments);
    }
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', apiLegalEntity_1.apiLegalEntity)
    ], apiAccountPermission.prototype, "allow", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccountPermission.prototype, "accountRule", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', apiLegalEntity_1.apiLegalEntity)
    ], apiAccountPermission.prototype, "onBehalfOf", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccountPermission.prototype, "account", void 0);
    apiAccountPermission = __decorate([
        typedjson_1.JsonObject, 
        __metadata('design:paramtypes', [])
    ], apiAccountPermission);
    return apiAccountPermission;
}(tsmvc_1.Model));
exports.apiAccountPermission = apiAccountPermission;
//# sourceMappingURL=apiAccountPermission.js.map