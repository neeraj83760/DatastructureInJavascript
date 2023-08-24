class Node{

    constructor(val){

        this.val = val;
        this.next = null;
    }
}

class Linklist{

    constructor(){

        this.head = null; 
    }

    insert(val){

        if(this.head === null){  
        this.head = new Node(val); 
        }

        else{

            let curr = this.head;
            while(curr.next !== null) curr = curr.next; 
            
            curr.next = new Node(val);
        
           }

        }

    print(){
              let curr = this.head;

              while(curr!==null){

                console.log(curr.val);
                curr = curr.next; 
              }

           }


    contains(value){
    
        let curr = this.head;
        while(curr!== null){

            if(curr.val === value){
            console.log(`Yes the linklist contains: ${value}`)
            return;
            }
            
            curr = curr.next; 
        } 

        if(curr === null) console.log('Linklist does not contain the respective value')

    } 
    
    delete(value){

        let curr = this.head;
        let previousNode; 
        // Deletion in the Begning of the linklist
        
        if(this.head.val === value){

            this.head = curr.next;
            return;
        
        } 
        // Deletion in between
        
           
        while(curr!== null){
     
            if(curr.next === null) previousNode.next = null;
            
            if(curr.val === value){
            previousNode.next = curr.next;  
            return;
            }
            
            previousNode = curr;
            curr = curr.next; 
        }        

    }


           
}

let firstNode = new Linklist();

firstNode.insert(12);
firstNode.insert(1);
firstNode.insert(22);
firstNode.insert(11);
firstNode.insert(10);
firstNode.insert(9);
firstNode.insert(7);

firstNode.print(); 

// firstNode.contains(7);

firstNode.delete(12);
console.log("*************")
firstNode.print();

firstNode.delete(7);

console.log("*************")
firstNode.print();

firstNode.delete(11)
console.log("**************")
firstNode.print();

firstNode.insert(90);

console.log("**************")
firstNode.print();





