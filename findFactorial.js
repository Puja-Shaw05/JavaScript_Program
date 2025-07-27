
let num = 1;
const end = 5;
let factorial = 1;

while(num <= end){
  factorial = factorial * num;
  num++;
}
console.log(`factorial of ${end} is : ` + factorial);
