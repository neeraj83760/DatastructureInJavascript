// class Node{

//     constructor(val)
//     {
//         this.left = null;
//         this.val = val;
//         this.right= null;
//     }
// }

// class BST{
//     constructor(){

//         this.root = null;
//     }

//     insert(val) {

//         let newNode = new Node(val), currparent;
        
//         if(this.root === null) this.root = newNode; 
//         else{
        
//         while(true){
//             currparent = this.root; 
//             if(!currparent.right){ 
            
//             if(currparent.val < val){    
//             currparent.right = newNode;
//             return this;
//             }

//             currparent = currparent.right;

//             }

//             else
//             {
//                 if(!currparent.left){ 
            
//                     if(currparent.val > val){    
//                     currparent.left = newNode;
//                     return;
//                     }
        
//                     currparent = currparent.left;

//             }

//             }

//         }
//     }

//     console.log('Entered in insert function')

// }



// }

// function print(parent){
//     console.log('Entered in Print function')

//     if(parent === null)
//     return;
//     else{
//         print(parent.left);
//         console.log(parent.val);
//         print(parent.right);
//         }
// }

// const Tree = new BST();

// Tree.insert(7);
// Tree.insert(9);
// Tree.insert(5);
// Tree.insert(12);
// Tree.insert(6);
// Tree.insert(1);
// Tree.insert(17);
// Tree.insert(3);


// print(Tree.root);

// ***************************Implement BST using constructor functions************************************

function Node(val){

this.left = null;    
this.val = val;
this.right = null

}

function BST(){

    this.head = null;

}

BST.prototype.insert = function(val){

    if(this.head === null) this.head = new Node(val); 

    else
    {
    let node = new Node(val), ParNode = this.head;
    while (true) {  
      if (val > ParNode.val){

      if(!ParNode.right){   
      ParNode.right = node;
      return;
      }
     
      ParNode = ParNode.right; 

      }else{

        if(!ParNode.left){   
        ParNode.left = node;
        return;
        }
       
        ParNode = ParNode.left; 
  
        }     
        
  }



    }

}

BST.prototype.print = function(){

        if(this.parent === null)
        return;
        else{
        print(parent.left);
        console.log(parent.val);
        print(parent.right);
        }
      
      
}


const Tree = new BST();

Tree.insert(7);
Tree.insert(9);
Tree.insert(5);
Tree.insert(12);
Tree.insert(6);
Tree.insert(1);
Tree.insert(17);
Tree.insert(3);


print(Tree.root);
