/*
Write a function 'canSum(targetSum, numbers)', that takes in a targetSum and an Array
of numbers as arguments

The function should return a boolean indicating whether or not it is possible to 
generate the targetSum using numbers from the array

You may use an element of the array as many times as needed 

You may assume that all input numbers are nonnegative 

canSum(7, [5,3,4]) -> true 

for finding the targetSum of 7 we need an array of size 7 + 1 = 8

Steps :

1. Intialize an Array with boolean value F conisdering targetSum is not possible 
2. Seed value : canSum(0, []) -> true it shows targetSum 0 is always possible means to generate 0 we
   we need no elements from the array
3. So Seed value as a first element of the array is : 0
4.  
*/

// Here we also Take 1d array as we took in Fibonacci sequence 


const canSum = (targetSum, numbers) =>{

    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    // console.log(table); 
    //  Instead of using table.length we need to stop at targetSum 
    for(let i=0; i <= targetSum; i++){
     
        if(table[i]=== true){
        for(let num of numbers){

            table[i + num] =true;

        }

        }
     
    }

    return table[targetSum];

}

/*
const arr = ['a','b', 'c']
arr[10] = 'p'
console.log(arr); 

Output will be : ['a', 'b', 'c', <7 empty items>, 'x']

*/ 

console.log(canSum(7, [5,3,4,7])); // true
console.log(canSum(7, [2,3])); // true
console.log(canSum(7, [2,4])); // false
console.log(canSum(8, [2,3,5])); // true
console.log(canSum(300 , [7,14])); // false












