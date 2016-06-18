"use strict";
var tsmvc_1 = require("tsmvc");
var typedjson_1 = require("typedjson");
var apiMoney = (function (_super) {
    __extends(apiMoney, _super);
    function apiMoney() {
        _super.apply(this, arguments);
    }
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiMoney.prototype, "currency", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', Number)
    ], apiMoney.prototype, "value", void 0);
    apiMoney = __decorate([
        typedjson_1.JsonObject, 
        __metadata('design:paramtypes', [])
    ], apiMoney);
    return apiMoney;
}(tsmvc_1.Model));
exports.apiMoney = apiMoney;
//# sourceMappingURL=apiMoney.js.map