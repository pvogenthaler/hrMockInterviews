/*
ES6: transpile via babel
falsey values: undefined, 0, null, NaN, false, ""
*/


// // sum(4, 5); // 9
// // sum(4)(5); // 9

// var sum = function(a, b){
//   // if there are two arguments
//   if (a !== undefined && b !== undefined) {
//     return a + b;
//   } else {
//     return function innerSum(num2) {
//       return a + num2;
//     }
//   }
// };

// console.log(sum(0, 5));
// console.log(sum(3)(5));


// var x = 'outside';
// function myFunc(){
//   var x;
//   console.log(x);
//   x = 'inside';
// }
// myFunc();


const input =  [  1,  2,  3,  4,  5];
const output = [120, 60, 40, 30, 24];

// 2 * 3 * 4 * 5 =>               || 2 * 3 * 4 * 5
// 1 * 3 * 4 * 5 => 1             || 3 * 4 * 5
// 1 * 2 * 4 * 5 => 1 * 2         || 4 * 5
// 1 * 2 * 3 * 5 => 1 * 2 * 3     || 5
// 1 * 2 * 3 * 4 => 1 * 2 * 3 * 4 ||

// Time Complexity  => O(2N);
// Space Complexity => O(N);
// greedy

const integerMultiply = function(arr) {
  let result = [];
  let temp = 1;
  arr.forEach((int) => {
    result.push(temp);
    temp *= int;
  })
  temp = 1;
  for (var i = arr.length - 1; i >= 0; i--) {
    result[i] = result[i] * temp;
    temp *= arr[i];
  }
  return result;
};

console.log(JSON.stringify(integerMultiply([1, 2, 3, 4, 5])) === JSON.stringify([120, 60, 40, 30, 24]));
