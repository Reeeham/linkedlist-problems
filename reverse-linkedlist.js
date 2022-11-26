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

//a->b->c->d->null
//d->c->-b->a->null


const reverseLinkedlist = (head) =>{
    let current = head;
    let prev = null;

    while(current != null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}


const reverseLinkedlistRec = (head, prev = null) =>{
    if(head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseLinkedlistRec(next, head);
}


console.log(reverseLinkedlist(a))