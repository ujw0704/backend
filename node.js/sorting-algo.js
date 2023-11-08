// Bubble - Sort
// Comparing all adjacent pairs and swaps if needed

// let items = [56, 67, 34, 23, 45, 89];
// for (let j = 0; j < items.length; j++) {
//   for (let index = 0; index < items.length - 1; index++) {
//     if (items[index] > items[index + 1]) {
//       //swap the positions
//       let temp = items[index];
//       items[index] = items[index + 1];
//       items[index + 1] = temp;
//     }
//   }
// }

// console.log(items);

let items = [45, 60, 70, 80, 1, 2, 3];

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let left = [];
  let right = [];
  for (const item of array.slice(1)) {
    item < pivot ? left.push(item) : right.push(item);
  }

  return quickSort(left).concat([pivot]).concat(quickSort(right));
}

console.log(quickSort(items));
