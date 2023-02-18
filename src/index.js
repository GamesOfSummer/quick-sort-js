"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    else {
        var pivotPoint = array.pop();
        var leftSmallerArray = [];
        var rightBiggerArray = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] < pivotPoint) {
                leftSmallerArray.push(array[i]);
            }
            else {
                rightBiggerArray.push(array[i]);
            }
        }
        var sortedLeft = quickSort(leftSmallerArray);
        var sortedRight = quickSort(rightBiggerArray);
        var newArray = [];
        return newArray.concat(sortedLeft, pivotPoint, sortedRight);
    }
}
(0, helpers_1.consoleStart)();
(0, helpers_1.validateFxn)(quickSort([2, 1]), [1, 2]);
(0, helpers_1.validateFxn)(quickSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
(0, helpers_1.validateFxn)(quickSort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
(0, helpers_1.validateFxn)(quickSort([3, 1, 2, 9, 6, 1]), [1, 1, 2, 3, 6, 9]);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
