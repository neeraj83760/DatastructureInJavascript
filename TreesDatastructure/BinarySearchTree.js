class Node{

    constructor(value) {
        this.value= value;
        this.left=  null;
        this.right= null; 
    }
}

class BST{

    constructor(value){
    this.root = new Node(value); 
    this.count = 1; // it will keep track of how many nodes are in the tree 
    }

size (){

return this.count; 
}   

insert(value){
this.count++

let newNode = new Node(value)

const searchTree = (node) =>{

if(value < node.value){
if(!node.left){

    node.left = newNode; 
}else{

    searchTree(node.left);  
}

}

else if(value > node.value){
if(!node.right){

    node.right = newNode; 
}
  
else{

    searchTree(node.right);  
}
}
}

searchTree(this.root); 
}

min(){

    let currentNode = this.root 
    while(currentNode.left){
    
    currentNode = currentNode.left; 
    }

    return currentNode.value; 
}

max(){

    let currentNode = this.root 
    while(currentNode.right){
    
    currentNode = currentNode.right; 
    }

    return currentNode.value; 


}

contains(value){

let currentNode = this.root

while(currentNode){
if(value === currentNode.value){

    return true; 
} 

if(value < currentNode.value){

currentNode = currentNode.left;     
}else{

currentNode = currentNode.right;     
}
}

return false; 

}

// Depth first search comes in three flavors, Inorder, preOrder, PostOrder

dfsInorder(){

let result = [] 

const traverse = (node)=>{
// if the left child exist go to the left child again     
if(node.left) traverse(node.left)
result.push(node.value);
// if the right child exist go to the right child again 
if(node.right) traverse(node.right)   

}
traverse(this.root) 
return result
}


dfsPreorder(){

    const traverse = (node)=>{
        result.push(node.value);     
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)   
        
        }
        traverse(this.root) 
        return result
}

dfsPostorder(){

    const traverse = (node)=> {
        result.push(node.value);     
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)   
        
        }
        traverse(this.root) 
        return result
    


}

// BFS is level by level traversing 
bfs(){
let result = []
let queue = [] 

queue.push(this.root)

while(queue.length){
let currentNode = queue.shift()

result.push(currentNode.value);

if(currentNode.left){

queue.push(currentNode.left);     
}

if(currentNode.left){

queue.push(currentNode.right);      
}

}

return result;
}

}


const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst.size());
console.log(bst.min()); 
console.log(bst.max()); 
console.log(bst.contains(28)); 
console.log(bst.contains(44));
console.log(bst.dfsInorder())
console.log(bst.bfs())
console.log(bst.dfsInorder()) 



