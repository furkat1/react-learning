class MyLinkedList {
    constructor(nodeValue) {
        const node = new Node(nodeValue);
        this.head = node;
        this.tail = node;

        this.length = 1;
    }

    push(node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.head;
            let pre = this.head;
            while (temp) {
                pre = temp;
                temp = temp.next;
            }
            pre.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;

        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return this;
    }

    get(index) {
        let counter = 0;

        if (index + 1 >= this.length) {
            return undefined;
        }

        let temp = this.head;
        while (counter !== index) {
           counter++;
           temp = temp.next;
        }

        return temp;
    }
};

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};
