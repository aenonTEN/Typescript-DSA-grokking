import {searchSmallest} from './search_smallest';

export function selectionSort(numArr: number[]): number[]{

let sortedArray: number[] = [];
let originalLength = numArr.length;

  for(let i = 0; i < originalLength; i++){
    const smallestIndex = searchSmallest(numArr);
    sortedArray.push(numArr[smallestIndex]);
    numArr.splice(smallestIndex, 1);
    }

return sortedArray;


}
