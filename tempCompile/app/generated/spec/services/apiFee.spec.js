"use strict";
var serviceManager_1 = require("../../services/serviceManager");
var apiFee_1 = require("../../models/apiFee");
describe("apiFeeService", function () {
    var mockID = "testMockID";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiFeeService;
    });
    it("should be resolved", function () {
        expect(service.apiFeeDataLayer).toBeDefined();
    });
    describe("find", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiFeeDataLayer, "find");
            service.find(mockID);
            expect(service.apiFeeDataLayer.find).toHaveBeenCalledWith(mockID);
        });
    });
    describe("findAll", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiFeeDataLayer, "findAll");
            service.findAll();
            expect(service.apiFeeDataLayer.findAll).toHaveBeenCalled();
        });
    });
    describe("findAllWith", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiFeeDataLayer, "findAllWith");
            service.findAllWith(mockID);
            expect(service.apiFeeDataLayer.findAllWith).toHaveBeenCalledWith(mockID);
        });
    });
    describe("addItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiFeeDataLayer, "addItem");
            service.addItem(mockID);
            expect(service.apiFeeDataLayer.addItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("removeItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiFeeDataLayer, "removeItem");
            service.removeItem(mockID);
            expect(service.apiFeeDataLayer.removeItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("saveItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiFeeDataLayer, "saveItem");
            var model = new apiFee_1.apiFee();
            service.saveItem(model, mockID);
            expect(service.apiFeeDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
        });
    });
    //Custom methods:
    // describe("getAccount", () => {
    //   it("should call dataLayer", ()=>{
    //     spyOn(service.apiFeeDataLayer, "getAccount");
    //
    //     var model = new apiFee();
    //
    //     service.getAccount(model);
    //     expect(service.apiFeeDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
    //   });
    // });
});
//# sourceMappingURL=apiFee.spec.js.map