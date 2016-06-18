"use strict";
var serviceManager_1 = require("../../services/serviceManager");
var apiAccountPermission_1 = require("../../models/apiAccountPermission");
describe("apiAccountPermissionService", function () {
    var mockID = "testMockID";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiAccountPermissionService;
    });
    it("should be resolved", function () {
        expect(service.apiAccountPermissionDataLayer).toBeDefined();
    });
    describe("find", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountPermissionDataLayer, "find");
            service.find(mockID);
            expect(service.apiAccountPermissionDataLayer.find).toHaveBeenCalledWith(mockID);
        });
    });
    describe("findAll", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountPermissionDataLayer, "findAll");
            service.findAll();
            expect(service.apiAccountPermissionDataLayer.findAll).toHaveBeenCalled();
        });
    });
    describe("findAllWith", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountPermissionDataLayer, "findAllWith");
            service.findAllWith(mockID);
            expect(service.apiAccountPermissionDataLayer.findAllWith).toHaveBeenCalledWith(mockID);
        });
    });
    describe("addItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountPermissionDataLayer, "addItem");
            service.addItem(mockID);
            expect(service.apiAccountPermissionDataLayer.addItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("removeItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountPermissionDataLayer, "removeItem");
            service.removeItem(mockID);
            expect(service.apiAccountPermissionDataLayer.removeItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("saveItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountPermissionDataLayer, "saveItem");
            var model = new apiAccountPermission_1.apiAccountPermission();
            service.saveItem(model, mockID);
            expect(service.apiAccountPermissionDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
        });
    });
    //Custom methods:
    // describe("getAccount", () => {
    //   it("should call dataLayer", ()=>{
    //     spyOn(service.apiAccountPermissionDataLayer, "getAccount");
    //
    //     var model = new apiAccountPermission();
    //
    //     service.getAccount(model);
    //     expect(service.apiAccountPermissionDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
    //   });
    // });
});
//# sourceMappingURL=apiAccountPermission.spec.js.map