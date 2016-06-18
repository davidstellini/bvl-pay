"use strict";
var serviceManager_1 = require("../../services/serviceManager");
var apiAccount_1 = require("../../models/apiAccount");
describe("apiAccount E2E", function () {
    var mockID = "PDMgdHlwZXNjcmlwdA==";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiAccountService;
    });
    describe("findAll", function () {
        it("should keep type information", function (done) {
            service.findAll().then(function (apiAccountList) {
                var firstModel = apiAccountList.first();
                if (apiAccountList.size() > 0) {
                    expect(firstModel instanceof apiAccount_1.apiAccount).toBeTruthy();
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
//# sourceMappingURL=apiAccount.e2e.spec.js.map