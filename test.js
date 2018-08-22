function isEven(num){
  return num%2 ==0;
}
var nums = [1,2,3,4,5,6,7,8,9];
var somEven = nums.some(isEven);
console.log(somEven)