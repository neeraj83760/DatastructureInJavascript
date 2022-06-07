// Lets write gridTraveler function 
// this is a brutforce solution that's why the 18x18 took more time to find the number
// of ways to reach the destination, which is the bottomost column 

// Time complexity of this approach is :  O(2^n+m) 2 to the power m+n 
// space complexity : height of the tree will give the maximum stack depth of the recursion
// In this case the number of level is :  O(n+m) is the space complexity 
// time compexity = number of function call we made which is equal to the number of
// nodes in the tree 
// time complexity is : either we subtract 1 from m or subtract 1 by n ...overall path from
// intial input till downthe tree to the node which is (1,1)its going to have the distance
// m+n
// Number of levels in the tree are m+n 
// at every level we have two options move right or more downward then the time complexity is 
// 2^m+n

//  VVVVIM key point = number of ways travel in 1x2 grid === number of ways travel in 2x1 grid


// There will be n+m levels in the tree so 
// var a, c=0;
// const gridTraveler =(m,n) =>{
// c++;
// if(m===1 && n===1) return 1;
// if(m===0 || n===0) return 0;
// // console.log()
// a = gridTraveler(m-1,n) + gridTraveler(m, n-1) //if I move to the downward direction
// // first it will decrease the row by one ...but if I go to right direction first it will
// // decrease the colum size by one
// console.log('counter value of c is', c);
// return a; 
// }

// // console.log(gridTraveler(1,1))// 1 
// // console.log('this is outside function', gridTraveler(2,3))// 3
// // console.log(gridTraveler(3,2))// 3
// console.log(gridTraveler(3,3))// 6 
// // console.log(gridTraveler(18,18))// 2333606220



// Grid Travler problem with memoization 


const gridTraveler =(m,n, memo={}) =>{
    const key = m+ ',' +n;
    if(key in memo) return memo[key]; 
    if(m===1 && n===1) return 1;
    if(m===0 || n===0) return 0;
    
    memo[key]= gridTraveler(m-1,n, memo) + gridTraveler(m, n-1, memo)
    console.log("This is memo", memo);
    return memo[key]; 
    }
    // if suppose m=42 
    // n=3

    // console.log(gridTraveler(1,1))// 1 
    console.log(gridTraveler(2,3))// 3
    // console.log(gridTraveler(3,2))// 3
    // console.log(gridTraveler(3,3))// 6 
    // console.log(gridTraveler(18,18))// 2333606220