// this algo. can only be performed on a Sorted array

let items = [34, 36, 40, 45, 50];

function binarySearch(array, value) {
  if (array.length <= 1) {
    if (array[0] == value) {
      console.log("found");
    } else {
      console.log("Not found");
    }
    return;
  }

  let mid = parseInt(array.length / 2);

  if (array[mid] == value) {
    console.log("found");
    return;
  } else if (value < array[mid]) {
    let left = array.slice(0, mid);
    return binarySearch(left, value);
  } else if (value > array[mid]) {
    let right = array.slice(mid);
    return binarySearch(right, value);
  } else {
    console.log("Not found");
    return;
  }
}

binarySearch(items, 34);
