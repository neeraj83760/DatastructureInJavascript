class Node{

    constructor(val){

        this.val = val;
        this.next = null;

        
    }
}

class Linkedlist {

    constructor()
    {
        this.head = null;
    }

    insert(val){

        if(this.head === null)
        { 
        this.head = new Node(val);
        return;
        }

        let curr = this.head;
        while(curr.next !== null){

            curr = curr.next;

        }

        curr.next = new Node(val);
    }


    display(){

        let root = this.head;
        console.log('Inside this keyword :', this);
        while(root !== null){
        console.log('Inside root :' + JSON.stringify(root));    
        console.log('Inside root.val  :' + root.val);
        console.log('Inside root.next  :' + JSON.stringify(root.next));  // Inside next [object object]
        root = root.next;
        }
    }
}
let a = new Linkedlist();
a.insert(23);
a.insert(3);
a.insert(31);
// a.insert(21);
// a.insert(4);
// a.insert(6);

a.display();


