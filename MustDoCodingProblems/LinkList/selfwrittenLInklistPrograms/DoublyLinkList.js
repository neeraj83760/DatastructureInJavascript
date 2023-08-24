class Node{

    constructor(val){
        
        this.prev= null;
        this.val = val;
        this.next = null;

    }
}

class DoublyLinkList{

    constructor(){

        this.head = null;
    }

    insert(value){

        if(this.head === null) this.head = new Node(value); 

        else{

               let curr = this.head; 
               while(curr.next!== null) curr = curr.next; 

               let newNode = new Node(value);
               curr.next = newNode;
               newNode.prev = curr; 
            }
    }

    print(){

        let reverseLinkListVar;

        let curr = this.head;
        while(curr!== null)
        {
            console.log(curr.val);
            reverseLinkListVar = curr;
            curr = curr.next; 
        }

        //console.log("*************After reversing the Link List ****************") 

        // while(reverseLinkListVar!==null){

        //     console.log(reverseLinkListVar.val);
        //     reverseLinkListVar = reverseLinkListVar.prev; 
        // }
    }
    
    DeletionInDoublyLinkList(value){

        let curr = this.head;
        let prevNode, nextNode;

        // Deletion in the beginning element  
        if(this.head.val === value){

            this.head = this.head.next;
            return;
        } 
        
        // Deletion in between 
        while(curr!== null){

        if(curr.val === value){
            
         prevNode.next = nextNode;
         nextNode.prev = prevNode; 
         return;         

        }
        
        prevNode = curr;
        curr = curr.next;
        nextNode = curr.next; 
        
        


    }
        

    }
}


let DoublyNode = new DoublyLinkList();

DoublyNode.insert(11);
DoublyNode.insert(7);
DoublyNode.insert(10);
DoublyNode.insert(5);
DoublyNode.insert(90);
DoublyNode.insert(34);

DoublyNode.print();

// DoublyNode.reverseLinkList();

// DoublyNode.DeletionInDoublyLinkList(5);

// console.log('After deleting element for the link ')

// DoublyNode.print();

// console.log('After deleting one more element for the linklist')

// DoublyNode.DeletionInDoublyLinkList(7);

console.log('After deleting first element from the Doublylinklist')

DoublyNode.DeletionInDoublyLinkList(11);

DoublyNode.print();

