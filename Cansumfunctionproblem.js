//Write a function 'canSum(targetSum, numbers)' that takes in a targetSum
//and an array of numbers as arguments 

// The function should return a boolean indicating wether or not it is possible
//to generate the targetSum using numbers from the array.

// Constraints

//You may use an element of the array as many times as needed
// You may assume that all input numbers are nonnegative 

// Example : canSum(7, [5,3,4,7]) -> true 

// Brute force solution for the canSum problem 

// m = target sum, n = array length // time compleixty is O(n^m) 

// height of the tree is = m

// so maximun callstack size can grow is at max m so space complexity is = m = O(m)

// const canSum = (targetSum, numbers)=>{
// if(targetSum === 0) return true;
// if(targetSum < 0)  return false;

// for(let num of numbers){
//    const remainder = targetSum - num; // subtracting array elements one by one
//    //from the targetSum number till we get the leaf node element 0. You can also check the same
//    // in the canSum folder which having all the pictures  

//   if(canSum(remainder, numbers)=== true){

//     return true; 
//   }
// }
// return false;
// };


// console.log(canSum(7,[2,3])) // true
// console.log(canSum(7,[5,3,4,7])) //true
// console.log(canSum(7,[2,4]))  //false
// console.log(canSum(8,[2,3,5])) //true
// console.log(canSum(300,[7,14])) //false


//************************This is the caSum program with memiozation ************** */
const canSum = (targetSum, numbers, memo={})=>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0)  return false;
    
    for(let num of numbers){
       const remainder = targetSum - num; // subtracting array elements one by one
       //from the targetSum number till we get the leaf node element 0. You can also check the same
       // in the canSum folder which having all the pictures  
      if(canSum(remainder, numbers, memo)=== true){
        
        memo[targetSum] = true;
        return true; 
      }
    }
    memo[targetSum]= false;
    return false;
    };

    console.log(canSum(7,[2,3])) // true
    console.log(canSum(7,[5,3,4,7])) //true
    console.log(canSum(7,[2,4]))  //false
    console.log(canSum(8,[2,3,5])) //true
    console.log(canSum(300,[7,14])) //false
    
    
