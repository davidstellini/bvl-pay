"use strict";
var serviceManager_1 = require("../../services/serviceManager");
var apiFee_1 = require("../../models/apiFee");
describe("apiFee E2E", function () {
    var mockID = "PDMgdHlwZXNjcmlwdA==";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiFeeService;
    });
    describe("findAll", function () {
        it("should keep type information", function (done) {
            service.findAll().then(function (apiFeeList) {
                var firstModel = apiFeeList.first();
                if (apiFeeList.size() > 0) {
                    expect(firstModel instanceof apiFee_1.apiFee).toBeTruthy();
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
//# sourceMappingURL=apiFee.e2e.spec.js.map