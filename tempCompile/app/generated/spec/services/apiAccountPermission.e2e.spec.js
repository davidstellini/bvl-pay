"use strict";
var serviceManager_1 = require("../../services/serviceManager");
var apiAccountPermission_1 = require("../../models/apiAccountPermission");
describe("apiAccountPermission E2E", function () {
    var mockID = "PDMgdHlwZXNjcmlwdA==";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiAccountPermissionService;
    });
    describe("findAll", function () {
        it("should keep type information", function (done) {
            service.findAll().then(function (apiAccountPermissionList) {
                var firstModel = apiAccountPermissionList.first();
                if (apiAccountPermissionList.size() > 0) {
                    expect(firstModel instanceof apiAccountPermission_1.apiAccountPermission).toBeTruthy();
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
//# sourceMappingURL=apiAccountPermission.e2e.spec.js.map