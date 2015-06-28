StringCalc = (function () {
    'use strict';

    function StringCalc() {

    }

    function addAsIntegers(a, b) {
        var radix = 10;

        return parseInt(a, radix) + parseInt(b, radix);
    }

    StringCalc.prototype.add = function (numbers) {
        var numberArray;

        if (numbers) {
            numberArray = numbers.split(",");

            return numberArray.reduce(addAsIntegers, 0);
        }

        return 0;
    };

    return StringCalc;
}());
