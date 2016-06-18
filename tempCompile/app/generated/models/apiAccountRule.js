"use strict";
var tsmvc_1 = require("tsmvc");
var typedjson_1 = require("typedjson");
var apiAccountRule = (function (_super) {
    __extends(apiAccountRule, _super);
    function apiAccountRule() {
        _super.apply(this, arguments);
    }
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', Boolean)
    ], apiAccountRule.prototype, "allowedToTxOut", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccountRule.prototype, "description", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccountRule.prototype, "accountPermissions", void 0);
    apiAccountRule = __decorate([
        typedjson_1.JsonObject, 
        __metadata('design:paramtypes', [])
    ], apiAccountRule);
    return apiAccountRule;
}(tsmvc_1.Model));
exports.apiAccountRule = apiAccountRule;
//# sourceMappingURL=apiAccountRule.js.map