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

// Time complexity of this Iterative solution is : O(n) where n is number
// of nodes in the link list , splace complexity is O(1) 

// const deleteValue = (head, target) => {
// if(head.val === target){
// return head.next; // Ye badi important line hai bhai...agar aap pehli hi node 
// // delete kar rahe ho to aapko pointer ka dhyaan rakhna hoga otherwise
// // u will not be able to traverse the whole link list

// }     
// let prev= null;    // here we are using two pointers to keep a track of current and
// // previous element 
// let curr = head;
// while(curr!== null){
// if(curr.val === target){
//     // we need to delete it
// prev.next = curr.next;     
// }    
// // console.log(curr.val);
// prev = curr; 
// curr = curr.next;

// } 

// return head;  // ye return karna isliye jaruri hai kyonki suppose aapne linklist ki
// // peheli node hi delete kar di to head pointer update ho jaayega

// }

//****** Recursive solution for the delete function in the link list ********
// time complexity of the recursive solution : O(n)
// space complexity : O(n) space 

const deleteValue = (head, target) =>{
if(head.val === target){
   return head.next; 
} 
_deleteValue(head, null, target);
return head;

}

const _deleteValue = (curr, prev, target) =>{
 if(curr === null){ 
        return; // it shows that we didnt find the target node at all within the linklist 
        // also the respective return statements shows that we have exhausted the 
        // entire linklist 
    }    
 if(curr.val === target){
     // delete curr 
     prev.next = curr.next;
     return;
 }

_deleteValue(curr.next, curr, target);
}



const print = (head) => {
if(head === null) return;
console.log(head.val);
print(head.next);
}

// print(a);
console.log('---------------')
const newHead = deleteValue(a, "a"); 

print(newHead); 