/// <reference path="../StringCalc.js" />

describe("String Calulator", function() {

    var calc;

    beforeEach(function() {
        calc = new StringCalc();
    });

    it("will not be null", function() {
        expect(calc).not.toBeNull();
    });

    describe("when passed no numbers to calculate", function() {

        it("will return 0", function() {
            expect(calc.add()).toBe(0);
        });

    });

});
