"use strict";
var serviceManager_1 = require("../../services/serviceManager");
var apiAccountRule_1 = require("../../models/apiAccountRule");
describe("apiAccountRule E2E", function () {
    var mockID = "PDMgdHlwZXNjcmlwdA==";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiAccountRuleService;
    });
    describe("findAll", function () {
        it("should keep type information", function (done) {
            service.findAll().then(function (apiAccountRuleList) {
                var firstModel = apiAccountRuleList.first();
                if (apiAccountRuleList.size() > 0) {
                    expect(firstModel instanceof apiAccountRule_1.apiAccountRule).toBeTruthy();
                }
                else {
                }
                done();
            }).catch(function (c) {
                done();
            });
        });
    });
});
//# sourceMappingURL=apiAccountRule.e2e.spec.js.map