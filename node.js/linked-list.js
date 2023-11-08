class Point {
  value;
  next = null;
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  #front = null;
  getElementAt(index) {
    let counter = 0;
    let temp = this.#front;
    while (temp != null) {
      if (index == counter) {
        return temp;
      }
      temp = temp.next;
      counter++;
    }
    return null
  }

  removeElementFrom(index){
    
  }

  insertElementAt(index, value) {
    // the first most insertion at 0 index
    if (index == 0 && this.length() == 0) {
      this.#front = new Point(value, null);
    } else if (index == 0 && this.length() != 0) {
      // insertion at 0th index but there is already some items exists
      this.#front = new Point(value, this.#front);
    } else {
      let prev = this.getElementAt(index - 1);
      prev.next = new Point(value, prev.next);
    }
  }

  length() {
    let counter = 0;
    let temp = this.#front;
    while (temp != null) {
      temp = temp.next;
      counter++;
    }
    return counter;
  }

  front() {
    return this.#front;
  }
}

let items = new LinkedList();

console.log(items.length()); //0

items.insertElementAt(0, 4);
items.insertElementAt(0, 5);

console.log(items.getElementAt(0).value); // 5
console.log(items.length()); // 2

items.insertElementAt(1, 7);
console.log(items.getElementAt(1).value); // 7
console.log(items.length()); // 3



















