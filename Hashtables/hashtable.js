// Hash Table

// 'this' refer to global object if it's just a regular function
// but if it's a Object's function it refers to that respective Object
// If it's a constructor function .. then when we create an object
// using new keyword of that constructor function then 'this' will refer
// to that empty {} object created by new keyword  

// Writing a best hash function is also a challenge for example
// if we Insert the value in the array  

const hash = (key, size) =>{

   let hashedKey = 0;
   
   for(let i=0; i< key.length; i++){

      hashedKey = key.charCodeAt(i);
   } 

   return hashedKey % size; 
}

class HashTable{

   constructor(){

      this.size = 20
      this.buckets = Array(this.size);
      
      // If the collision occurs u can use link list to store the value
      // collding in the same array index ... here in the place of linklist 
      // we use maps which do the same job for us
      
      for(let i=0; i< this.buckets.length; i++){

         this.buckets[i] = new Map()
      }

   }

   insert(key, value){

    let idx = hash(key, this.size)
    this.buckets[idx].set(key, value)   // set() is builtin method on map data structure

   
   }

   remove(key){
   
   let idx = hash(key, this.size)
   let deleted = this.buckets[idx].get(key)  // get() is also a builtin method on map data structure
   this.buckets[idx].delete(key) // delete() is again a bulitin method in map method
   return deleted
   }


   search(key){
   let idx = hash(key, this.size)
   return this.buckets[idx].get(key)  
   
   }
}

const hashTable = new HashTable();

hashTable.insert('Neeraj', 'moon')
hashTable.insert('John', 'venus')
hashTable.insert('Raju', 'mars')
hashTable.insert('Rahul', 'mercury')
hashTable.insert('sonu', 'earth')
hashTable.insert('Sashi', 'jupiter')

// console.log(hashTable.search('sonu')); 

console.log(hashTable.remove('sonu'))

console.log(hashTable); 