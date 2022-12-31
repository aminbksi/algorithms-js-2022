// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(entry, next = null) {
    this.data = entry;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let size = node ? 1 : 0;
    while (node && node.next) {
      size++;
      node = node.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    let node = this.head;
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    while (node.next) {
      if (!node.next.next) {
        node.next = null;
        return;
      }
      node = node.next;
    }
  }

  insertLast(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    const lastNode = this.getLast();

    lastNode.next = node;
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    let counter = 0;
    while (index !== counter) {
      counter++;
      node = node.next;
      if (!node.next && index !== counter) {
        return null;
      }
    }
    return node;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    const node = new Node(data);
    const current = this.getAt(index);

    if (!this.head) {
      this.head = node;
      return;
    }
    if (index === 0) {
      this.head = node;
      node.next = current;
      return;
    }
    const prev = this.getAt(index - 1) ?? this.getLast();

    prev.next = node;
    node.next = current;
  }
}

module.exports = { Node, LinkedList };
