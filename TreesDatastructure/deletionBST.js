class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    
    }

}
class BinarySearchTree {

    constructor(value){
      this.root = new Node(value) 
    }

    insert(value){
        
        
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
        
    
    // this function calls removeNode
    
    remove(value){
        this.root = this.removeNode(this.root, value)
    }
    // a recursive function to insert a new value in binary search tree
    
    removeNode(current, value) {
        
        // base case, if the tree is empty 
        
       if(current === null) return current
        
        // when value is the same as current's value, this is the node to be deleted
        
        if (value === current.value) {
             
            // for case 1 and 2, node without child or with one child
            
            if (current.left === null && current.right === null){
                
                    return null
                
                }else if(current.left === null){
                
                    return current.right 
             
                }else if(current.right === null){
                
                    return current.left
                
                }else{
                    
                    /// node with two children, get the inorder successor, 
                    //smallest in the right subtree
                    
                    let tempNode = this.kthSmallestNode(current.right)
                        current.value = tempNode.value
                    
                    /// delete the inorder successor
                    
                        current.right = this.removeNode(current.right, tempNode.value)
                    return current
            }

        // recur down the tree
            
        }else if(value < current.value) {
            
            current.left = this.removeNode(current.left, value)
            return current
            
        }else{
            
            current.right = this.removeNode(current.right, value)
            return current
        }
    }
    
     /// helper function to find the smallest node
    
    kthSmallestNode(node) {
        while(!node.left === null)
            node = node.left

        return node
    }

 dfsInorder(){

        let result = []
        
        const traverse = (node)=>{
        // console.log('node in dfsInorder', node)    
        // if the left child exist go to the left child again     
        if(node.left) traverse(node.left)
        result.push(node.value);
        // if the right child exist go to the right child again 
        if(node.right) traverse(node.right)   
        
        }
        traverse(this.root) 
        return result
        }    
    
}



   


//      a     ---- 0 level          9
//     /  \                        / \
//    b    c  -----1  level       6   8
//   / \    \                    / \   \
//  d   e    f  ---2  level     4  7    12

// Time complexity of this algorithm is :  O(n) 
// Space complexity is also : O(n)



const bst = new BinarySearchTree(15); 

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst.dfsInorder())
 
bst.remove(28) 

console.log(bst.dfsInorder()); 







