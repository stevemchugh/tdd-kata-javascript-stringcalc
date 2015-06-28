/// <reference path="../StringCalc.js" />

describe("String Calulator", function() {

    it("will not be null", function() {
        var calc = new StringCalc();

        expect(calc).not.toBeNull();
    });

    describe("when passed no numbers to calculate", function() {

        it("will return 0", function() {
            var calc = new StringCalc();

            expect(calc.add()).toBe(0);
        });

    });

});
