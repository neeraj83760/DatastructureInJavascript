class AVLTree {

    constructor(value) {
        // preparing root element 
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
    add(value) {

        if (value < this.value) {
            // add as left node
            if (this.left) {
                this.left = this.left.add(value);
            } else {
                this.left = new AVLTree(value);
            }
        } else {
            // add as right node
            if (this.right) {
                this.right = this.right.add(value);
            } else {
                this.right = new AVLTree(value);
            }
        }

        this.height = this.findHeight();

        let balanceRate = this.findBalance();


        // balanceRate <-1 || >+1 are unbalanced tree;  

        // imbalance because right has more nodes 
        if (balanceRate < -1) {
            /* 
            * 1st condition for recognize 'y' is left or right of 'x'
            * 2nd condition for recognize z is left or right of y;       
            */
            if (this.right.value < value) {
                //position: new node(z) is left of this.right node(y)
                return this.leftRotate();
            }
            if (this.right.value > value) {
                //position: new node(z) is right of this.right node(y)
                this.right = this.right.rightRotate();
                return this.leftRotate();
            }
        }
        // imbalance because left has more nodes
        if (balanceRate > 1) {

            if (this.left.value > value) {
                return this.rightRotate();
            }
            if (this.left.value < value) {
                this.left = this.left.leftRotate();
                return this.rightRotate();
            }
        }
        
        return this;
    }
    leftRotate() {
        // currently x is root; 
        let x = this;
        let y = this.right;
        let t = y.left;

        // left rotation 
        x.right = t;
        y.left = x;

        // after left rotation  y became root node
        x.height = x.findHeight(); // find child( x ) height before parent( y ) height
        y.height = y.findHeight();

        return y;
    }
    rightRotate() {
        // currently x is root; 
        let x = this;
        let y = this.left;
        let t = y.right;

        // right rotation 
        x.left = t;
        y.right = x;

        // after right rotation  y became root node
        x.height = x.findHeight();
        y.height = y.findHeight();

        return y;
    }
    findHeight() {
        let leftHeight = this.left ? this.left.height : 0;
        let rightHeight = this.right ? this.right.height : 0;

        return Math.max(leftHeight, rightHeight) + 1;
    }
    findBalance() {
        let leftHeight = this.left ? this.left.height : 0;
        let rightHeight = this.right ? this.right.height : 0;

        return leftHeight - rightHeight;
    }


}
// Test LeftRotate
//let root = new AVLTree(1).add(2).add(3).add(4).add(5);
/* 
Output
            2
    1               4
                3       5
    
*/
// let insertOrder = [31,30,26,20,15,16,10,8,6,7,12,14,18,17,25,15];

let insertOrder = [31,32,34,41,51,57,63,65,57,69,77,87,97]

window.root;
insertOrder.forEach(e =>{
    if(window.root){
        window.root= root.add(e);
    } else{
        window.root = new AVLTree(e);
    }
});
console.log('root : ', window.root);