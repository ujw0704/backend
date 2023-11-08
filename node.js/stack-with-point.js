class Point {
  value;
  next = null;
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  #last;
  // to see the count of the collection // can be named as count() as well
  length() {
    let counter = 0;
    let temp = this.#last;
    while (temp != null) {
      temp = temp.next;
      counter++;
    }
    return counter;
  }

  // to add new item at last location // can be named as add(), insert() as well
  push(item) {
    this.#last = new Point(item, this.#last);
  }

  // to delete the last item // can be named as remove(), delete() as well
  pop() {
    // the item present next to last will be the current last 
    // means current last is deleted
    this.#last = this.#last.next;
  }

  // to just get last item // can be named as last(), top() as well
  peek() {
    return this.#last.value
  }
}

let s = new Stack();

// s.getAll().push()

s.push(5);
s.push(6);

console.log(s.peek()); /// its should log 6
console.log(s.length()); /// its should log 2

s.push(7);
s.push(8);

console.log(s.peek()); /// its should log 8
console.log(s.length()); /// its should log 4

s.pop(); //removes last
console.log(s.peek()); /// its should log 7
console.log(s.length()); /// its should log 3
