/* this keyword mistery : below sequence me yaad rakhoge to kabhi nahi bhuloge

1. pehli baat : this ek variable hai , refrence variable jo har execution context(every function) 
ke saath create ho jaata hai 
2. Ye this variable apne owner ko point karta hai jisme hum is keyword ko use kar sakte hai
3. this static variable nahi hota for example , like let x = 5  to poore program me x = 5 hi rahega jabtak 
hum usse change na kare to , Ye depend karta hai function actually kaise call hua hai aur uski value
tabhi assign hoti hai jab function actually call ho for more details check the attached screeshot

4. this never points to a function itself and not it's variable enviournment 

*/ 

/*

What Happens when u call a function with new operator?

1. Pehla ek new empty object create hoga {}

2. phir function call hoga, uske baad jo naya object create hua hai usme this set kiya jaayega,
Means this key = new empty object {}. It also means in Execution context this will point 
to the empty object jo create hua hai step number one me. Ye sirf islye ho raha hai kyoki
hum function ko new keyword ke saath call kar rahe hai   

3. newly created object will be linked to a prototype

4. function will automatically return that empty object {} from the begnining ...
but at this point object no longer needs to be empty .. and this is actually a trick to make
constructor function work       

*/

const Node = function(val){
    
    // number is an Instance property which is available on every object we create from Node
    // constructor function 
    this.number = val;
    
    // Its never a good practice to keep the function inside a constructor function
    // coz suppose u have 100's of objects then 100's of copies will be created of that function 
    // so we need to keep it seprate  

    // this.insert = function(){

    //     console.log(`Value sucessfully Inserted!${this.number}`)
    // }
}

let nodeData = new Node(12);

console.log(nodeData);
console.log(nodeData instanceof Node); 


/* **********************Prototypes in Javascript *****************************************

1. Har function ki property hoti hai prototype jisme constructor functions bhi included hai

*/ 

console.log('Node.prototype', Node.prototype);

Node.prototype.insert = function(){

    console.log(`Value sucessfully Inserted!${this.number}`)
}

nodeData.insert();

let nodeData2 = new Node(11);

console.log('__proto__ of nodedata2', nodeData.__proto__); // {insert: ƒ, constructor: ƒ}

console.log('isPrototypeof keyword', Node.prototype.isPrototypeOf(nodeData)) // trisue

// Node.prototype is not a prototype of Node itself u can check the same

console.log(Node.prototype.isPrototypeOf(Node)); // false, so more preicesly we can say that its a .prototypeOfLinkedObjects

nodeData2.insert(); // ye dusra object hai Node constructor function ka but insert function ka this
// nodeData2 object ki hi property number which is 11 ko point kar raha hai this is called best 
// use of this in constructor function 


// **************  We can also set properties on prototype including methods ******************

Node.prototype.type = 'Integer';

console.log('Nodedata and nodeData.type',   nodeData, nodeData.type);
console.log('NodeData2 and nodeData.type', nodeData2, nodeData2.type)

// hasOwnProperty shows wehter the property is of its own or the Inhertited one 

console.log(nodeData.hasOwnProperty('number'));

console.log(nodeData.hasOwnProperty('type'));


//   ******************* Prototypcal Inheritance on builtin Objects***************************

//  Try to move up the prototypical chain and check what we get

console.log("Latest console state NodeData2", nodeData2)
