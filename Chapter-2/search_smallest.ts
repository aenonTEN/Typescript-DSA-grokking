export function searchSmallest(numArr: number[]): number {
let smallest = numArr[0];
let smallest_index = 0;

  for (let i = 1; i < numArr.length; i++){
    if(numArr[i] < smallest){

    smallest = numArr[i];
    smallest_index = i;
    }

  }
  return smallest_index;


}
