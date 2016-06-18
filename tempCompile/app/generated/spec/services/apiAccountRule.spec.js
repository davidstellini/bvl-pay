"use strict";
var serviceManager_1 = require("../../services/serviceManager");
var apiAccountRule_1 = require("../../models/apiAccountRule");
describe("apiAccountRuleService", function () {
    var mockID = "testMockID";
    var service;
    beforeEach(function () {
        serviceManager_1.ServiceManager.initialize();
        service = serviceManager_1.ServiceManager.apiAccountRuleService;
    });
    it("should be resolved", function () {
        expect(service.apiAccountRuleDataLayer).toBeDefined();
    });
    describe("find", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountRuleDataLayer, "find");
            service.find(mockID);
            expect(service.apiAccountRuleDataLayer.find).toHaveBeenCalledWith(mockID);
        });
    });
    describe("findAll", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountRuleDataLayer, "findAll");
            service.findAll();
            expect(service.apiAccountRuleDataLayer.findAll).toHaveBeenCalled();
        });
    });
    describe("findAllWith", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountRuleDataLayer, "findAllWith");
            service.findAllWith(mockID);
            expect(service.apiAccountRuleDataLayer.findAllWith).toHaveBeenCalledWith(mockID);
        });
    });
    describe("addItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountRuleDataLayer, "addItem");
            service.addItem(mockID);
            expect(service.apiAccountRuleDataLayer.addItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("removeItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountRuleDataLayer, "removeItem");
            service.removeItem(mockID);
            expect(service.apiAccountRuleDataLayer.removeItem).toHaveBeenCalledWith(mockID);
        });
    });
    describe("saveItem", function () {
        it("should call dataLayer", function () {
            spyOn(service.apiAccountRuleDataLayer, "saveItem");
            var model = new apiAccountRule_1.apiAccountRule();
            service.saveItem(model, mockID);
            expect(service.apiAccountRuleDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
        });
    });
    //Custom methods:
    // describe("getAccount", () => {
    //   it("should call dataLayer", ()=>{
    //     spyOn(service.apiAccountRuleDataLayer, "getAccount");
    //
    //     var model = new apiAccountRule();
    //
    //     service.getAccount(model);
    //     expect(service.apiAccountRuleDataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
    //   });
    // });
});
//# sourceMappingURL=apiAccountRule.spec.js.map