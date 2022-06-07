class Node{

    constructor(val){
    this.val = val;
    this.left = null;
    this.right= null; 
    }
}

const a = new Node('a');
const b = new Node('b'); 
const c = new Node('c'); 
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');    

a.left= b;
a.right= c;
b.left= d;
b.right=e;
c.right=f;


// console.log(a.left);

// Iterative solution for the binary tree travesal problem 

const depthFirstValues = (root)=>{

if(root === null) return [];     
const result =[]; 
const stack = [root];

while(stack.length > 0){
  
  const current = stack.pop();
//   console.log(current.val);
  result.push(current.val); 
  if(current.left)  stack.push(current.right);
  if(current.right) stack.push(current.left);  
}

return result; 

};

depthFirstValues(a); 