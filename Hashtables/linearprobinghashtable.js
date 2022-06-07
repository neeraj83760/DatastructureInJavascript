class HashTable{

    constructor(){
 
       this.size = 20
       this.buckets = Array(this.size);
       
       // If the collision occurs u can use link list to store the value
       // collding in the same array index ... here in the place of linklist 
       // we use maps which do the same job for us
       
    //    for(let i=0; i< this.buckets.length; i++){
 
    //       this.buckets[i] = new Map()
    //   
 }
   

   insert(key, value){

    let idx = hash(key, this.size)
    this.buckets[idx]   // set() is builtin method on map data structure

   
   }
}



