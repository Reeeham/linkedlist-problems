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


//index 2 should return C

const getNodeValue = (head, index) => {
    let current = head;
    if(current == null) return 'Not found';
    for (let i = 0; i <= index; i++) {
        if(i === index) return current.val;
        current = current.next;
    }
    return 'Not found';
}
const getNodeValueRec = (head, index,  i = 0) => {
    let current = head;
    if(current === null || i > index) return 'Not found';
    if(i == index) return current.val;
    return getNodeValueRec(current.next, index, ++i)
}
console.log(getNodeValueRec(a, 2));