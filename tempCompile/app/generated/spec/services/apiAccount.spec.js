"use strict";
var serviceManager_1 = require("../../services/serviceManager");
var apiAccount_1 = require("../../models/apiAccount");
describe("apiAccountService", function () {
    var mockID = "testMockID";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiAccountService;
    });
    it("should be resolved", function () {
        expect(service.apiAccountDataLayer).toBeDefined();
    });
    describe("find", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountDataLayer, "find");
            service.find(mockID);
            expect(service.apiAccountDataLayer.find).toHaveBeenCalledWith(mockID);
        });
    });
    describe("findAll", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountDataLayer, "findAll");
            service.findAll();
            expect(service.apiAccountDataLayer.findAll).toHaveBeenCalled();
        });
    });
    describe("findAllWith", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountDataLayer, "findAllWith");
            service.findAllWith(mockID);
            expect(service.apiAccountDataLayer.findAllWith).toHaveBeenCalledWith(mockID);
        });
    });
    describe("addItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountDataLayer, "addItem");
            service.addItem(mockID);
            expect(service.apiAccountDataLayer.addItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("removeItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountDataLayer, "removeItem");
            service.removeItem(mockID);
            expect(service.apiAccountDataLayer.removeItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("saveItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountDataLayer, "saveItem");
            var model = new apiAccount_1.apiAccount();
            service.saveItem(model, mockID);
            expect(service.apiAccountDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
        });
    });
    //Custom methods:
    // describe("getAccount", () => {
    //   it("should call dataLayer", ()=>{
    //     spyOn(service.apiAccountDataLayer, "getAccount");
    //
    //     var model = new apiAccount();
    //
    //     service.getAccount(model);
    //     expect(service.apiAccountDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
    //   });
    // });
});
//# sourceMappingURL=apiAccount.spec.js.map