"use strict";
var tsmvc_1 = require("tsmvc");
var typedjson_1 = require("typedjson");
var apiLegalEntity = (function (_super) {
    __extends(apiLegalEntity, _super);
    function apiLegalEntity() {
        _super.apply(this, arguments);
    }
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiLegalEntity.prototype, "userRef", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiLegalEntity.prototype, "accounts", void 0);
    apiLegalEntity = __decorate([
        typedjson_1.JsonObject, 
        __metadata('design:paramtypes', [])
    ], apiLegalEntity);
    return apiLegalEntity;
}(tsmvc_1.Model));
exports.apiLegalEntity = apiLegalEntity;
//# sourceMappingURL=apiLegalEntity.js.map