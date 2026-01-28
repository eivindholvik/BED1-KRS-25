class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data) {
        const newNode = new ListNode(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        // // should remove last item, with O(1)
        // const newNode = new ListNode(data);
        // if (!this.head) {
        //     this.head = newNode;
        //     return;
        // }
        // let current = this.head;
        // while (current.next) {
        //     current = current.next;
        // }
        // current.next = newNode;
    }

    get(findI) {
        // if (typeof findI !== number)
        //     throw new Error(`invalid argument type ${typeof findI}`);
        if (!this.head) {
            throw new Error(`The length of this list is shorter than ${findI}`);
        }
        let curr = this.head;
        let i = 0;
        while (i < findI) {
            i++;
            if (curr.next) {
                curr = curr.next;
            } else {
                throw new Error(`${findI} is outside of the scope`);
            }
        }
        return curr.data;
    }

    remove() {
        if (!this.head) {
            console.log("there are no items");
            return;
        }
        const temp = this.head.data;
        this.head = this.head.next;
        return temp;
    }

    display() {
        if (!this.head) {
            console.log("there are no items to display");
            return;
        }
        let i = 0;
        let current = this.head;
        do {
            console.log(`The value of node ${i} is ${current.data}`);
            current = current.next;
            i++;
        } while (current.next);
        console.log(`The value of node ${i} is ${current.data}`);
    }
}

const myLinked = new LinkedList();
myLinked.add("hei");
myLinked.add(3);
myLinked.add(6);
myLinked.add(12);
// myLinked.display();

console.log(myLinked.get(3));
