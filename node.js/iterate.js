let items = [34, 7, 3, 54, 6];

function loop(from, to) {
  console.log(items[from]);
  if (from < to) {
    loop(from + 1, to);
  }
}

loop(0, 4);
