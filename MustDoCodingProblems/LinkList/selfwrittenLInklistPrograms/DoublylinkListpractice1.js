
// *******************************DOM Manupulation Code *************************

let element1 = document.querySelector('.txt1');
let element2 = document.querySelector('.txt2');
let element3 = document.querySelector('.txt3');
let element4 = document.querySelector('.txt4');
let element5 = document.querySelector('.txt5');

let buttn = document.querySelector('.btn')

function element(str, e){
    
    
    LL.insert(e.target.value);
    console.log(`${str} number entered`, e.target.value)
    console.log(e)
    

}

element1.addEventListener('change', (e)=>{

       element('1st', e); 

})

element2.addEventListener('change', (e)=>{

        element('2nd', e);

})

element3.addEventListener('change', (e)=>{

        element('3rd', e);

})

element4.addEventListener('change', (e)=>{

       element('4th', e);

})

element5.addEventListener('change', (e)=>{

         element('5th', e);

})

buttn.addEventListener('click', (e)=>{

    LL.reverseLinkList();
    console.log('button clicked ') 


})



class Node {

    constructor(value) {
        
        this.value = value;
        this.next = null;
        this.prev = null;  
    }

}

class doublyLinklist{

   currNode = null; 

    constructor(){

        this.head = null; 
    }

    insert(value){

        if(this.head === null) 
        {
        this.head = new Node(value); 
        }
        else{

            let newNode = this.head;
            this.currNode =  new Node(value);
            while(newNode.next!== null)  newNode = newNode.next; 
            
            newNode.next = this.currNode;
            this.currNode.prev = newNode; 
          
        }
    }


    print(){
        let curr = this.head;
        
        while(curr!== null)
        {
            console.log(curr.value);
            this.currNode = curr; 
            curr = curr.next;
            
        }
       
    }

    reverseLinkList(){

        let prevPointer = this.currNode; 
        let counter = 1;

        while(prevPointer!== null)
        {
            console.log(prevPointer.value);
            document.querySelector(`.txt${counter}`).value = prevPointer.value; 
            prevPointer = prevPointer.prev;
            counter++;
            
            
        }

    }
}

let LL = new doublyLinklist();

// LL.insert(4);
// LL.insert(12);
// LL.insert(11);
// LL.insert(33);
// LL.insert(9);
// LL.insert(6);
// LL.insert(17);
// LL.insert(89);

// LL.print(); 

// console.log('-------After reversing the Linklist----------')

// LL.reverseLinkList();






