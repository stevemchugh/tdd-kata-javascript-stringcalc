/// <reference path="../StringCalc.js" />

describe("String Calulator", function () {
    'use strict';

    var calc;

    beforeEach(function () {
        calc = new StringCalc();
    });

    it("should not be null", function () {
        expect(calc).not.toBeNull();
    });

    describe("when passed no numbers to calculate", function () {

        it("should return 0", function () {
            expect(calc.add()).toBe(0);
        });

    });

    describe("when passed and empty string to calculate", function() {

        it("should return 0", function () {
            expect(calc.add("")).toBe(0);
        });

    });

    describe("when passed string with 1 number 1", function () {

        it("should return 1", function () {
            expect(calc.add("1")).toBe(1);
        });

    });

    describe("when passed string with 1 number 2", function () {

        it("should return 2", function () {
            expect(calc.add("2")).toBe(2);
        });

    });

});
