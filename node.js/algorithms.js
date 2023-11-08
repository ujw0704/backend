// when you back, please add a msg in chat,
// count all numbers from 1 to n -- can skip this if you want
// count only evens from 1 to n  -- this one is imp

// let n = 7,r ; /// from 1 - 7 ?  how many --> 3 numbers are even

// 3 even numbers from 1 - 7

// function evenNumberCounter(n) {
//   return parseInt(n / 2); // two operations   // divide // convert

//   // let count = 0;
//   // for (let i = 1; i <= n; i++) {
//   //   if (i % 2 === 0) count++;
//   // }
//   // return count;
// }

// const countEvenNumbers = evenNumberCounter(10);
// console.log(countEvenNumbers);

///
// do search

let items = [34, 56, 23, 78, 57, 12, 39];
let value = 39; 

// best case: O(1)
// if item present at first location then only single check will get performed

// Worst case : O(n)
// if item present at last location then (N) checks will get performed

// array methods are not allowed
// can use length property

for (let index = 0; index < items.length; index++) {
  if (items[index] == value) {
    console.log(`${value} is present at index ${index}`);
    break;
  }
}

/// linear search algorithm -->
// you check all items one by one

// O/P    57 is present at index 4
