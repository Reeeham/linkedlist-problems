class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a  = new Node('A');
const b  = new Node('B');
const c  = new Node('C');
const d  = new Node('D');

a.next = b; 
b.next = c;
c.next = d;

// A -> B -> C -> D

const linkedListValues = (head) => {
    const values = [];
    let current = head;
    while(current != null) {
        values.push(current.val);
        current = current.next;
    }
    return values;
}
const linkedListValuesRec = (head) => {
   const values = [];
   fillValues(head, values);
   return values;
}

const fillValues = (head, values) => {
    let current = head;
    if(current == null) return;
    values.push(current.val);
    fillValues(current.next, values);
}

console.log(linkedListValuesRec(a));