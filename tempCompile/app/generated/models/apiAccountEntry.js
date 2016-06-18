"use strict";
var tsmvc_1 = require("tsmvc");
var typedjson_1 = require("typedjson");
var apiMoney_1 = require("./dep/apiMoney");
var apiAccountEntry = (function (_super) {
    __extends(apiAccountEntry, _super);
    function apiAccountEntry() {
        _super.apply(this, arguments);
    }
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', apiMoney_1.apiMoney)
    ], apiAccountEntry.prototype, "amount", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccountEntry.prototype, "description", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', Number)
    ], apiAccountEntry.prototype, "runningBalance", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccountEntry.prototype, "account", void 0);
    __decorate([
        typedjson_1.JsonMember, 
        __metadata('design:type', String)
    ], apiAccountEntry.prototype, "timestamp", void 0);
    apiAccountEntry = __decorate([
        typedjson_1.JsonObject, 
        __metadata('design:paramtypes', [])
    ], apiAccountEntry);
    return apiAccountEntry;
}(tsmvc_1.Model));
exports.apiAccountEntry = apiAccountEntry;
//# sourceMappingURL=apiAccountEntry.js.map