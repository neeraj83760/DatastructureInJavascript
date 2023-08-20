// Return the nth number of the fibbonacci sequence 
// fib(n) : 1,1,2,3,5,8,13,21,34,.......
//   n    : 1,2,3,4,5,6,7,8,9........ n is the index of the fib sequence number 

const fib = (n)=>{

    if(n<=2) return 1;
    return fib(n-1) + fib(n-2) 

};

console.log(fib(6))
// console.log(fib(7))
// console.log(fib(8))
// console.log(fib(50)) // means it will take 2^50 steps to find the 50th fib sequence number 
// roughly the number of steps are :  1,125,899,906,842,624 which a recursive function takes just
// to compute 50th fibonacci number 

/*

const foo =(n) =>{

    if(n <= 1)return;  if n=5 then the number of calls we made is 5 so time complexity is O(n) 
    foo(n-1);         // space complexity is : 5 dff function calls added to the stack so space
    // complexity is also O(n) 
}

const bar =(n) =>{

    if(n <= 1)return;  if n=6 then the number of calls we made is 6/2 =3(so for n is n/2) so time 
                        complexity is O(n/2) which is equal to O(n) 
    bar(n-2);         // space complexity is : if n=6 then 3 dff function calls added to the stack so space
    // complexity is also O(n/2) which is equal to O(n) 
}


const dib =(n) =>{

    if(n<=1) return;  // This function will form a complete binary tree beacuse for each value
                         of n we are making exactly 2 recursive calls 
                      // height of the tree is distance from the root node all the way to the 
                         farthest leaf node
                      // so for this function height of the tree is = n, number of levels in
                      // the tree is also n ... level is just a collection of nodes that are away
                      // from the root 
                      // height of tree is n and at each nodes are increasing by multiple of 2
                      like on first level 1, second level 2, thrid level 4, fourth level 8 and so on 
                      
                      number of levels is = n and height is = n so time complexity is O(2^n)
                      space complexity is = O(n) 

                      height of the tree = max stack depth required is n 
    dib(n-1);
    dib(n-1);
}


const lib= (n) =>{

    if(n<=1) return;
    lib(n-2);
    lib(n-2);      // height is n/2 so the time complexity is = 2^n/2 
                   // space complexity is O(n/2) which is similar to O(n) 

}

*/

// Here we can use memoization(store the duplicate subproblems) 
//to solve the dynamic programming problems .... hash maps used to store the dup subprobelms
// by other programming language, but in javascript we use javascript objects 

//js object, keys will be arg to function, value will be the return value

// const fib = (n, memo = {})=>{
//     if(n in memo) return memo[n];
//     if(n<=2) return 1;
//     console.log('Before recursive call', memo[n], n)
//     console.log('Before recursive call memo is', memo)  
//     memo[n] = fib(n-1, memo) + fib(n-2, memo)
//     console.log('After recursive call', memo[n], n)
//     console.log('After recursive call memo is', memo)   
//     return memo[n];
// };

// console.log(fib(6)) // if we don't pass the second argument in the fib function it will automatcally
// create a empty javascript object and assign to memo
// here we want memo store n as a key and value as return values of the respective function    
// console.log(fib(7))
// console.log(fib(8))
// console.log(fib(50)) 





