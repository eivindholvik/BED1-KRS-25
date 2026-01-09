class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }

    sum() {
        let sum = 0;
        let cur = this.head;

        while (cur !== null) {
            sum += cur.value;
            console.log(cur);
            cur = cur.next;
        }

        return sum;
    }
}

const linkedList = new LinkedList();

[5, 7, 6, 3, 8, 4, 1].forEach((value) => linkedList.append(value));

const sumOfValuesLinkedList = linkedList.sum();

console.log(sumOfValuesLinkedList);
