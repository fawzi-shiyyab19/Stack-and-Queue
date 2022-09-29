'use strict';

const { Node } = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }
  append(value) {
    const node = new Node(value);
    if (this.head) {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      return currentNode.next = node;
    } else {
      return this.head = node;
    }
  }
  deleteLast() {
    if (this.head) {
      let currentNode = this.head;
      let i = 0
      while (currentNode.next) {
        currentNode = currentNode.next;
        i++;
      }
      let header = this.head;
      for (let y = 1; y < i; y++) {
        header = header.next;
      }
      header.next = null;
      return header;
    } else {
      return this.head;
    }
  }
  getLast() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
      return (this.head);
    } else {
      return (`LinkedList is empty`);
    }
  }
}



module.exports = { LinkedList };