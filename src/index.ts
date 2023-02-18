import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers';

function quickSort(array: number[]) {
    if (array.length < 2) {
        return array;
    } else {
        const pivotPoint = array.pop();

        let leftSmallerArray = [];
        let rightBiggerArray = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i] < pivotPoint) {
                leftSmallerArray.push(array[i]);
            } else {
                rightBiggerArray.push(array[i]);
            }
        }

        const sortedLeft = quickSort(leftSmallerArray);
        const sortedRight = quickSort(rightBiggerArray);

        let newArray = [];
        return newArray.concat(sortedLeft, pivotPoint, sortedRight);
    }
}

consoleStart();

validateFxn(quickSort([2, 1]), [1, 2]);
validateFxn(quickSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
validateFxn(quickSort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
validateFxn(quickSort([3, 1, 2, 9, 6, 1]), [1, 1, 2, 3, 6, 9]);

consoleEnd();
consoleBuffer();

export {};
