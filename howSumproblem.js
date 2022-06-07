// write a function `howSum(targetSum, numbers)`that takes in a targetSum and an array
// of numbers as arguments

// The function should return an array containing any combination of elements that add
// up to exactly the targetSum. If there is no combination that adds up to the targetSum,
// then return null.

// if there are multiple combinations possible, you may return any single one.


// Brute force solution for the howSum problem 

// const howSum = (targetSum, numbers) =>{
// if(targetSum === 0) return[];
// if(targetSum < 0) return null;

// for(let num of numbers){

// const remainder = targetSum - num;
// const remainderResult = howSum(remainder,numbers);
// if(remainderResult !== null){
    
//     return[... remainderResult, num]
// }
// }

// return null;
// };

// m = targetSum
// n = numbers.length
// Number of recursive calls made , time : O(n^m*m) , the multiplied m steps will be taken by 'return[... remainderResult, num]'
// this step

// Space complexity of this brut force approach is : O(m) 

// howSum function using memoization 

const howSum = (targetSum, numbers, memo = {}) =>{

    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return[];
    if(targetSum < 0) return null;
    
    for(let num of numbers){
    
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder,numbers, memo);
    if(remainderResult !== null){
        
        memo[targetSum] = [ ...remainderResult, num];
        return memo[targetSum];
    }
    }
    memo[targetSum]=null;
    return null;
    };

    // Time complexity for memoized approach 
    // time: O(n*m^2)
    // space : O(m*n)  

    console.log(howSum(7,[2,3])) // true
    console.log(howSum(7,[5,3,4,7])) //true
    console.log(howSum(7,[2,4]))  //false
    console.log(howSum(8,[2,3,5])) //true
    console.log(howSum(300,[7,14])) //false
    