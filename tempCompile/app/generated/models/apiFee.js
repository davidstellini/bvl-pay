"use strict";
var tsmvc_1 = require("tsmvc");
var typedjson_1 = require("typedjson");
var apiMoney_1 = require("./dep/apiMoney");
var apiFee = (function (_super) {
    __extends(apiFee, _super);
    function apiFee() {
        _super.apply(this, arguments);
    }
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', apiMoney_1.apiMoney)
    ], apiFee.prototype, "fixed", void 0);
    apiFee = __decorate([
        typedjson_1.JsonObject, 
        __metadata('design:paramtypes', [])
    ], apiFee);
    return apiFee;
}(tsmvc_1.Model));
exports.apiFee = apiFee;
//# sourceMappingURL=apiFee.js.map