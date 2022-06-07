// The main property of the tree data structure is there is only 
// one path between any two nodes in the data structure 

// Always remember that class is just a syntatical sugar on constructor function 

// Time complexity of BFS on the tree is :  O(n)

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

const a = new Node(3);
const b = new Node(6);
const c = new Node(7);
const d = new Node(1);
const e = new Node(2);
const f = new Node(4);

// above are just nodes which you've created but still they are not connected 
// so suppose if you want to form the tree mentioned below then what will do 


//      a     ---- 0 level 
//     /  \
//    b    c  -----1  level 
//   / \    \
//  d   e    f  ---2  level 

// So the BFS of the above given tree is : a,b,c,d,e,f

// a.left = b;
// a.right= c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(a);

// We will apply BFS for the traversal in the the tree because : As in BFS we explore 
// all the nodes first which all are in the same level and then on the second level and so on ...

//************************ BFS algorithm *************************** 

// const breadthFirstPrint = (root) => {

//     const queue = [root];
//     while(queue.length > 0){
//       const current = queue.shift();
//       console.log(current.val);
//       if(current.left !== null){

//         queue.push(current.left);
//       }
//       if(current.right !== null){

//         queue.push(current.right);
//       }    
//       }  

//     }


//     breadthFirstPrint(a); 


// Finding the element in the tree using BFS traversal technique 


// const BFS = (root, target) => {

//     const queue = [root];
//     while(queue.length > 0){
//       const current = queue.shift();
//     //   console.log(current.val);
//      if (current.val === target) return true; 
//       if(current.left !== null){

//         queue.push(current.left);
//       }
//       if(current.right !== null){

//         queue.push(current.right);
//       }    
//       }  
      
//       return false;  // after checking the whole tree if we didn't find the value
//       // we can simply say the value not found .... that's we write it after
//       // we exit from the loop 
//     }


//  console.log(BFS(a, 'f'));
//  console.log(BFS(a, 'z'));  



//********************Find the sum of all elements in the tree ************ */


a.left = b;
a.right= c;
b.left = d;
b.right = e;
c.right = f;

 const sumTree = (root) => {

    const queue = [root];
    let sum = 0; 
    while(queue.length > 0){
      const current = queue.shift();
      sum += current.val; 
    //   console.log(current.val); 
      if(current.left !== null){

        queue.push(current.left);
      }
      if(current.right !== null){

        queue.push(current.right);
      }    
      }  
      
      return sum;  // after checking the whole tree if we didn't find the value
      // we can simply say the value not found .... that's we write it after
      // we exit from the loop 
    }

console.log(sumTree(a))