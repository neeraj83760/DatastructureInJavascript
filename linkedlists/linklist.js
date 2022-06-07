class Node{

    constructor(val){

        this.val=val;
        this.next = null;
    }

}

class Linkedlist {

    constructor(){

        this.head = null;

    }


append(val){

    if(this.head === null){

    this.head = new Node(val);
    return;
    } 

    let curr = this.head;
    while(curr.next !== null){
    curr = curr.next;
    // console.log(curr.next);
    } 

    curr.next = new Node(val); 
}

print(){

let str = '';
let curr = this.head;
while(curr !== null){
  str += curr.val + '->';
  curr = curr.next;     
}
console.log(str);     
}


contains(target){
let curr = this.head;
while(curr !== null){
    if(curr.val === target) return true;
    curr = curr.next;
}

return false; 
}
}


const list = new Linkedlist();

list.append('a'); 
list.append('b'); 
list.append('c'); 
list.append('d'); 

// console.log(list.head);

list.print(); 


console.log(list.contains('a'));
console.log(list.contains('z'));