// Sum of all numbers in an array

const numArray = [2,5,7,3,1,8,3,6];

let sum = 0;
for(let i=0; i<numArray.length; i++){
  sum = sum + numArray[i];
}
console.log("Sum of numbers in array is : "+ sum);
