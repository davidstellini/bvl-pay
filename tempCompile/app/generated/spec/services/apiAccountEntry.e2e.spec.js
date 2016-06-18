"use strict";
var serviceManager_1 = require("../../services/serviceManager");
var apiAccountEntry_1 = require("../../models/apiAccountEntry");
describe("apiAccountEntry E2E", function () {
    var mockID = "PDMgdHlwZXNjcmlwdA==";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiAccountEntryService;
    });
    describe("findAll", function () {
        it("should keep type information", function (done) {
            service.findAll().then(function (apiAccountEntryList) {
                var firstModel = apiAccountEntryList.first();
                if (apiAccountEntryList.size() > 0) {
                    expect(firstModel instanceof apiAccountEntry_1.apiAccountEntry).toBeTruthy();
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
//# sourceMappingURL=apiAccountEntry.e2e.spec.js.map