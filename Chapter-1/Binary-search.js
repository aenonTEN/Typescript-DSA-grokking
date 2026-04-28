"use strict";
class BinarySearch {
    numberList = new Array < number > [];
    numberList = [1, 2, 12, 56, 78, 96, 112, 546, 1100];
    numToSearch = 96;
}
function BinarySearch(numToSearch, numList) {
    numList = this.numberList;
    numToSearch = this.numToSearch;
    low = 0;
    high = numList.length - 1;
    while (low <= high) {
        mid = maths.floor((low + high) / 2);
        guess = numList[mid];
        if (guess === numToSearch) {
            return mid;
        }
        if (guess < numToSearch) {
            high = mid - 1;
        }
        if (guess > numToSearch) {
            low = mid + 1;
        }
        return none;
    }
}
binSearch = BinarySearch();
console.log(binSearch);
