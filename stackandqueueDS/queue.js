// We can Implement a queue using an Array and the linked list 

// Add elements from the backside of the queue called enqueue
// remove elements from the front of the queue is called dequeuing

// Implemeting queue using an array

const queue = [];
queue.push('a') // this will help the element at the end of the array
queue.push('b')
queue.push('c')
queue.push('d')

// console.log(queue)

queue.shift(); // it will remove the element from the front of the array

// Implementing a queue using array is not the efficent implementation 
// like we do an operation which is shift() it means after removing 
// element from the begnning of the array we have to move rest of the
// elements one Index forward ... which gives O(n) time complexity but we need O(1) time
// complexity for enqueue and dequeue operations 


// In this below approach the time complexity of enqueue and dequeue operations is O(1) 

class QueueNode {

    constructor(val){

        this.val= val;
        this.next= null;
    }
}

class Queue{

constructor(){

    this.front= null
    this.back = null
    this.size = 0; 
}    

enqueue(val){
const newNode = new QueueNode(val);    
if(this.size === 0){

    this.front = newNode;
    this.back  = newNode; 
}else{

    this.back.next = newNode;
    this.back = newNode;  
}

this.size++; // whenever u are enqueing something it means u are increasing the size of the
// queue 
 
}

dequeue(){
if(this.size === 0) return null;// suppose if we want to keep on deleting even there is
// no element(node) in the queue then we should check that condition as well  

const removedNode = this.front;

if(this.size ===1)
this.back = null;

this.front = this.front.next;
this.size--;
return removedNode.val; 
}
} 

// a->b->c->d
// f        b      f= front, b= back 

const newQueue = new Queue()

newQueue.enqueue('a')
newQueue.enqueue('b')
newQueue.enqueue('c')
newQueue.enqueue('d')
newQueue.enqueue('e') 

// console.log(newQueue.size); 

// console.log(newQueue.front.val); 
// console.log(newQueue.back.val);  



newQueue.dequeue()
newQueue.dequeue()


console.log(newQueue)
