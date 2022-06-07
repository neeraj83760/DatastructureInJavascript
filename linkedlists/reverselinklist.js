class Node{

    constructor(val){

        this.val=val;
        this.next = null;
    }

}
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')

a.next =b;
b.next =c;
c.next =d;
d.next =e; 

// a->b->c->d->e

const print = (head) => {
    if(head === null) return;
    console.log(head.val);
    print(head.next);
    }


    print(a);

// *****  Iterative solution to reverse the linklist in the array ********

// Time complexity of revesring the linklist is : O(n) 
// space complexity : O(1); 

// const reverseList = (head) =>{
// let prev = null;
// let curr = head; 

// while(curr !== null){
// const next = curr.next;    // next is a temporary pointer 
// curr.next = prev;

// prev = curr;
// curr = next;
// }

// return prev;
// }    




// Recursive solution to reverse the linklist
// Time complexity of this recursive approach is : O(n)
// Space complexity : O(n)    

const reverseList = (curr, prev = null) =>{
      if(curr === null) { // it means u are at the end of your link list 
         return prev; 

       }
      const next = curr.next;  
      curr.next = prev;  
      return reverseList(next, curr);
}


const newHead = reverseList(a);

console.log('---------------------')
print(newHead)