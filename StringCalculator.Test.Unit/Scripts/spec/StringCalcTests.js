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

    describe("when passed an empty string to calculate", function() {

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

    describe("when passed string with 2 numbers 1,2", function () {

        it("should return 3", function () {
            expect(calc.add("1,2")).toBe(3);
        });

    });

    describe("when passed string with 2 numbers 3,3", function () {

        it("should return 6", function () {
            expect(calc.add("3,3")).toBe(6);
        });

    });

    describe("when passed string with 3 numbers 3,3,3", function () {

        it("should return 9", function () {
            expect(calc.add("3,3,3")).toBe(9);
        });

    });

    describe("when passed string with 4 numbers 3,3,3,2", function () {

        it("should return 11", function () {
            expect(calc.add("3,3,3,2")).toBe(11);
        });

    });

    describe("when passed string with 10 numbers 3,3,3,2,2,2,1,1,1,1", function () {

        it("should return 19", function () {
            expect(calc.add("3,3,3,2,2,2,1,1,1,1")).toBe(19);
        });

    });
});
