/// <reference path="../StringCalc.js" />

describe("String Calulator", function() {

    it("will not be null", function() {
        var calc = new StringCalc();

        expect(calc).not.toBeNull();
    });

});