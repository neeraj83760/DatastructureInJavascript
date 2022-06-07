// Brutforce approach
// complexity anyalysis 
// m = targetSum
// n = numbers.length

// Time Complexity : O(n^m * m) // m multiplication is just because of this [...remainderCombination, num]
// Space complexity : O(m^2)
const bestSum = (targetSum, numbers) =>{

if(targetSum === 0) return[];
if(targetSum < 0) return null;

let shortestCombination = null;
// forin loop gives indices of the array but we want the elments so we use forof loop 

for(let num of numbers){
const remainder = targetSum - num;
const remainderCombination = bestSum(remainder,numbers);
if(remainderCombination != null){  
const combination = [...remainderCombination, num]
// If the combination is shorter than the current 'shortest', update it

if(shortestCombination === null || combination.length < shortestCombination.length){

shortestCombination = combination;    
}

}

}
 return shortestCombination;
};

// students always assume that to choose the best sum by including the largest number 
// in the given array but that's is not always the case. suppose if u took a 5 in an array
// then u have to take 3 (1's) just to make a sum of 8  

console.log(bestSum(7,[5,3,4,7])); //[7]
console.log(bestSum(8,[2,3,5])); //[3,5]
console.log(bestSum(8,[1,4,5])); //[4,4]
// console.log(bestSum(100,[1,2,5,25])); //[25,25,25,25] 

