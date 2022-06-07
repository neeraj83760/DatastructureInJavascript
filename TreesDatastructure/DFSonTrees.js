// DFS on the tree is : we will pick up a root not and keep on exploring it's child till we
// hit the leaf node 
// so the DFS for the below mentioned tree is :  a,b,d,e,c,f 
// Here we use stack data structure to Implement DFS on the below mentioned tree 

//      a     ---- 0 level 
//     /  \
//    b    c  -----1  level 
//   / \    \
//  d   e    f  ---2  level 

// Time complexity of this algorithm is :  O(n) 
// Space complexity is also : O(n)

class Node {

    constructor(val){

        this.val =val;
        this.left=null;
        this.right=null; 
    }

}

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');


// a.left = b;
// a.right= c;
// b.left = d;
// b.right = e;
// c.right = f;

// DFS  Iterative solution 

// const depthFirstPrint = (root) => {

//     const stack = [root];
//     while(stack.length > 0){

//     const curr = stack.pop();
//     console.log(curr.val);
//     // add curr's children to the top of the stack

//     if(curr.right !== null){ // here we are trying not to add any null value in the stack
//         stack.push(curr.right);    
//         }

//     if(curr.left !== null){  // here we are trying not to add any null value in the stack
     
//         stack.push(curr.left);
//     } 

// }
// }

// depthFirstPrint(a);



// ****************  DFS recursive solution ****************************************

// Time complexity for the recursive call is : O(n), space complexity : O(n) 

// const depthFirstPrint = (root) => {
//     // If the tree is empty 
//     if(root === null) return null;
    
//     console.log(root.val);
//     depthFirstPrint(root.left);
//     depthFirstPrint(root.right); 

// }

// depthFirstPrint(a);


// *********** Pre post and In order traversal of the trees algorithm are just the
// variations of depth first traversal *******************

// Pre order traversal (print the parent before it's children) === Is a kind of depth first search traversal 

// Postorder is :  print the children first , before it's parent : 
// Output for the postorder traversal is : debfca


// Inorder traversal : debacf



// ************** Problems related to DFS traversal ***********************************

const a = new Node(3);
const b = new Node(6);
const c = new Node(7);
const d = new Node(1);
const e = new Node(2);
const f = new Node(4);

a.left = b;
a.right= c;
b.left = d;
b.right = e;
c.right = f;

// const sumTree = (root) => {

//     const stack = [root];
//     let sum = 0; 
//     while(stack.length > 0){

//     const curr = stack.pop();
//     sum += curr.val;
//     // console.log(curr.val);
//     // add curr's children to the top of the stack

//     if(curr.right !== null){ // here we are trying not to add any null value in the stack
//         stack.push(curr.right);    
//         }

//     if(curr.left !== null){  // here we are trying not to add any null value in the stack
     
//         stack.push(curr.left);
//     } 

// }

//   return sum; 
// }


// Recursive solution for the sumTree problem using DFS 
// time complexity : O(n) , space complexity : O(n)

const sumTree = (root) => {
if(root === null) return 0; 

return sumTree(root.left) + root.val + sumTree(root.right); 

}

console.log(sumTree(a));


