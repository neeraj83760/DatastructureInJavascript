class Node{

    constructor(val){
     
        this.val = val;
        this.next = null; 
    }
}

class CircularLinklist{

    constructor(){

        this.last = null;
    }

    insert(val){

        let temp;

        if(this.last === null) 
        {
        temp = new Node(val);
        temp.next = temp;
        this.last = temp; 
        }
        else{

            temp = new Node(val); 
            // new node ke next me pheli waali node ka address  
            temp.next =  this.last.next;
            

            // root node ka next me new node ka address   
            this.last.next = temp;   
            }

        }

        print(){

            if(this.last === null) console.log('Linklist is Empty')

            else{

                let curr = this.last;

                do
                {
                console.log(curr.val)
                curr = curr.next; 

                } while(curr.next !== this.last)
            }
        }

    }


let circularNode = new CircularLinklist();


circularNode.insert(12)

circularNode.insert(1)

circularNode.insert(5)

circularNode.insert(6)

circularNode.insert(14)

circularNode.insert(78)

circularNode.insert(14)


circularNode.print();





