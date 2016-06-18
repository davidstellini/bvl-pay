describe('App', function () {
    beforeEach(function () {
        browser.get('/');
    });
    it('should have a title', function () {
        var subject = browser.getTitle();
        var result = 'Angular2 Webpack Starter by @gdi2290 from @AngularClass';
        expect(subject).toEqual(result);
    });
    it('should have <md-toolbar>', function () {
        var subject = element(by.css('app md-toolbar')).isPresent();
        var result = true;
        expect(subject).toEqual(result);
    });
    it('should have <md-content>', function () {
        var subject = element(by.css('app md-content')).isPresent();
        var result = true;
        expect(subject).toEqual(result);
    });
    it('should have text in footer', function () {
        var subject = element(by.css('app #footerText')).getText();
        var result = 'WebPack Angular 2 Starter by @AngularClass';
        expect(subject).toEqual(result);
    });
});
//# sourceMappingURL=app.e2e.js.map