class Node {
  constructor(val) {
    this.right = null;
    this.val = val;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node, ParNode;
    node = new Node(val);

    if (this.root === null) this.root = new Node(val);
   
    ParNode = this.root;
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

print() {

  if(this.parent === null)
  return;
  else{
  print(this.parent.left);
  console.log(this.parent.val);
  print(this.parent.right);
  }
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

// let parent = Tree.root;

// console.log(parent)

print(Tree.root);
