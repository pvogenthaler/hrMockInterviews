function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode(5);
var b = new LinkedListNode(1);
var c = new LinkedListNode(9);

a.next = b;
b.next = c;
console.log(a)
//Reverse a linked list.

//I
//O
//C
//E


//current
//prev
//next

// 5 1 9 2
//

function reverseLinkedList(node) {
  let currNode = node;
  let prev = null;
  let next = null;
  while (currNode.next !== null) {
    next = currNode.next;
    currNode.next = prev;

    prev = currNode;
  // current = next;

    // if (prev) {
    //   currNode.next = prev;
    // }

    currNode = next;
  }

  return prev;
}


function reverse(headNode) {
  let current = headNode;
  let prev = null;
  let nextNode = null;

  while(current) {
    nextNode = current.next;
    current.next = prev;

    prev = current;
    current = nextNode;
  }

  return prev;
}

console.log(reverseLinkedList(a));
