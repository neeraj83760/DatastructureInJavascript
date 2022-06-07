// Maximally efficent stack : O(1) time for push/pop
// Implementing the stack using linklist

// Push and pop operations takes O(1) time but space complexity will be = O(n) // where
// n is the size of the stack 

class stackNode {

    constructor(val){

        this.val  = val;
        this.next = null;
    }
}

class Stack{

    constructor(){

        this.top = null;
        this.size = 0; 
    }

push(val){

if(this.size === 0){

this.top = new stackNode(val);     
}else{

const pushedNode = new stackNode(val);
pushedNode.next = this.top;
this.top = pushedNode;     
}

this.size++;
}   

getTop(){// just give u the the top element of the stack 

    return this.top.val;
}


pop(){

if(this.size === 0) return null;
const poppedNode = this.top; // saving the stack top value in the poppedNode variable before removing it
this.top = this.top.next;
this.size--;  
return poppedNode;
}

}

// TOP -> a -> b -> c 


const myStack = new Stack();

myStack.push('a');
myStack.push('b');
myStack.push('c');
myStack.push('d');


// console.log(myStack.size);
// console.log(myStack.top);
// console.log(myStack.getTop());

console.log(myStack.pop());
console.log(myStack.size);