/* write a function 'bestSum(targetSum, numbers)' that takes in a targetSum and
an array of numbers as arguments

function should return an array containing the shortest combination of the 
numbers that add up to exactly the targetSum

if there is a tie for the shortest combimation, you may return any on of the shortest

bestSum(8, [2,3,5]) =>  [2,2,2,2] , [2,3,3] , [3,5] , the shortest one is [3,5]
*/ 

const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        // IF this current combintation is shorter that what is already stored

        if ( !table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }

  return table[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7])); //[7]
console.log(bestSum(8, [2, 3, 5])); // [3,5]
console.log(bestSum(9, [1, 4, 5])); // [4,4]
console.log(bestSum(100, [1, 2, 5, 25])); [25,25,25,25]

