export function binarySearch(item: number, numList: number[]): number | null {

let low: number = 0;
let high: number =  numList.length - 1;

let guess: number;

while(low<=high){

let mid = Math.floor((low + high)/ 2);
guess = numList[mid];

if(guess==item){

return mid;

} else if(guess<item){

low = mid + 1;

}else {

high = mid - 1;

}


}
return null;



}
