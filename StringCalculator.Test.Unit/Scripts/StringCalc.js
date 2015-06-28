StringCalc = (function () {
    'use strict';

    function StringCalc() {

    }

    StringCalc.prototype.add = function (numbers) {
        var radix = 10;

        if (numbers) {
            return parseInt(numbers, radix);
        }

        return 0;
    };

    return StringCalc;
}());
