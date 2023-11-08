class Point {
  value;
  prev;
  next;
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
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

  removeElementFrom(index) {}

  insertElementAt(index, value) {
    if (index == 0 && this.#front == null) {
      this.#front = new Point(value, null, null);
    } else if (index == 0 && this.#front != null) {
      let temp = this.#front;
      this.#front = new Point(value, null, temp);
      temp.prev = this.#front;
    } else {
        let currentItem = this.getElementAt(index)
        let prevItem = this.getElementAt(index - 1)
        let newItem = new Point(value,null,null);        

        prevItem.next = newItem 
        newItem .prev = prevItem

        newItem.next = currentItem 
        currentItem.prev = newItem

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

}



let items = new DoublyLinkedList();

console.log(items.length()); //0

items.insertElementAt(0, 4);
items.insertElementAt(0, 5);

console.log(items.getElementAt(0).value); // 5
console.log(items.length()); // 2

items.insertElementAt(1, 7);
console.log(items.getElementAt(1).value); // 7
console.log(items.length()); // 3
