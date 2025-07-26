// Find the maximum number of an array

const arr = [10,90, 50,500 , 30,20,60, 200, 400];

let max = arr[0];

for(let i=1; i<arr.length; i++){
  if(arr[i] > max)
    max = arr[i];
}

console.log("Maximum number is : "+ max);

// Find the minimum number of an array

const arr = [10,90, 50,500 , 30,20,60, 2,5,6];

let min = arr[0];

for(let i=1; i<arr.length; i++){
  if(arr[i] < min)
    min = arr[i];
}

console.log("Minimum number is : "+ min);
