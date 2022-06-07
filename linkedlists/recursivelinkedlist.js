class Node{

    constructor(val){
    this.val = val;
    this.next = null;
    }
}

class Linkedlist{

    constructor(){

    this.head = null;      
    }

append(val){

    if(this.head === null){
    this.head = new Node(val);
    return;
    } 
   
  this._append(val, this.head); 
}

_append(val, curr){

  if(curr.next == null){

    curr.next = new Node(val);
    return;
  }
  
this._append(val, curr.next);
}

print(){

const output = this._print(this.head);
console.log(output);     
}
// seprating the recursive _print function from the above actual print function because 
// when someone calls the print method we don;t want them to manually pass in the head 
_print(curr){

    if(curr === null) return '';
    return curr.val + '->' +this._print(curr.next)
}

contains(target){

    return this._contains(target, this.head); 
}

_contains(target, curr){

if(curr === null) return false; 
if(curr.val === target) return true;
return this._contains(target, curr.next); // this function will also return the boolean  
}
}

const list = new Linkedlist();

list.append(12);
list.append(11);
list.append(13);
list.append(8);

// console.log(list.head);

// list.print();

// console.log(list.contains('a')) 
// console.log(list.contains('b')) 
// console.log(list.contains('c')) 
// console.log(list.contains('d'))
// console.log(list.contains('e')) 


// Time complexity for sumlist iterative solution is = 
//  Space complexity is : O(1)  

// const sumList = (head) =>{
//     let sum = 0;  
//     let curr = head;
//     while(curr !== null){
//     sum += curr.val;
//     curr = curr.next;     
//     }  

//     return sum;
// }


// Recursive approach for the sumList function 
// Time complexity for sumList recursive approach is : O(n)
// Space complexity : O(n)

const sumList = (head) =>{

    if(head === null) return 0;
    return head.val + sumList(head.next);
}

console.log(sumList(list.head));