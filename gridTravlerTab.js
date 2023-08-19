// gridTraveler(3,3) -> 6

// As we done in FibTab program here also we will take 4x4 grid to compute 3x3 grid problem which is
// one row and one column more coz in array indexing starts from 0 so to compute 3x3 array size will
// become 4x4

/*
1. then initialize the complete 2d array with 0's as Intial values
2. seed initial values in the Array . ie gridTraveler(1,1) should return 1 , so in that 2d
array at index[1][1] = 1 
3. at index[0][0] possiblity is also 0 coz we have on grid at all so to reach rightmost grid is
also 0  
4. adding current position which is AT index[0][0] which is 0 element to its adjacent right and adjacent bottom neighbour , and repeat this process for every row 

Time complexity for this also is : O(mn)
Space complexity : O(mn)

*/ 

const gridTraveler = (m,n) =>{
// Way of forming 2d array 
const table = Array(m + 1).fill().map(() => Array(n+1))

/* You can also write the above line of code like const table = Array(m+1).fill(Array(n+1))  
   but this is incorrect way of forming 2d array 
   the problem with this code is we if we write : table[0][0] = 'x' it will give output
   
   ['x', <2 empty Items>]
   ['x', <2 empty Items>]
   ['x', <2 empty Items>]
   ['x', <2 empty Items>]

   We made changes at one Index but it made changes in first element every row which is not correct.  
   We need unique array refrences 
*/ 

// table[0][0] = 'x';



console.log(table);

}

// console.log(gridTraveler(1,1)) // 1
// console.log(gridTraveler(2,3)) // 3
console.log(gridTraveler(3,2)) // 3
// console.log(gridTraveler(3,3)) // 6
// console.log(gridTraveler(18,18)) // 2333606220