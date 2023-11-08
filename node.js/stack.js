class Stack {
  #allItems = [];

  getAll() {
    //create a copy and return

    // let copy = [...this.#allItems];
    // let copy = this.#allItems.map(x=>x);
    // let copy = this.#allItems.filter(x=>true);
    // let copy = this.#allItems.concat([])
    return [...this.#allItems];
  }

  // to see the count of the collection // can be named as count() as well
  length() {
    return this.#allItems.length;
  }

  // to add new item at last location // can be named as add(), insert() as well
  push(item) {
    this.#allItems.push(item);
  }

  // to delete the last item // can be named as remove(), delete() as well
  pop() {
    this.#allItems.pop();
  }

  // to just get last item // can be named as last(), top() as well
  peek() {
    return this.#allItems[this.#allItems.length - 1];
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
