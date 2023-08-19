/* 
   Finding fib(6) by tabulation strategy 
   
   1. If u want to calculated f(6) u need to take the length of array is 7 (0 - 6) which is one more than array length
   2. then initialize the complete array with 0's as Intial values
   3. seed initial values in the Array as 0 and 1 coz first fibonacci number is 0 and second is 1 , then 
   iterating through table 
   4. add 0th index number to the next two positions in the array and so on till u reach the 
   last index in the array.
   5. We need three pointers here : currentPostion, nextPostion, nexttonextPostion
   6. During Iteration we will add currentPostion pointing value to nextPosition and nexttonextPosition pointing
   value
   
   In this Iterative process the time Completxity is : O(n)
   Space complexity : O(n)
*/ 

const fib = (n) =>{

    const table = Array(n + 1).fill(0)

    table[1] = 1; 
    // console.log(table);

    for(let i=0; i<=n; i++){
    
        table[i+1] += table[i]
        table[i+2] += table[i]  

    }

    return table[n];


}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));




