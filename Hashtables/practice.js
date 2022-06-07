// Given two integer arrays A1[ ] and A2[ ] of size N and M respectively. Sort the first 
//array A1[ ] such that all the relative positions of the elements in the first array are 
//the same as the elements in the second array A2[ ].
//See example for better understanding.
//Note: If elements are repeated in the second array, consider their first occurance only.

/* 
Input:
N = 11 
M = 4
A1[] = {2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8}
A2[] = {2, 1, 8, 3}
Output: 
2 2 1 1 8 8 3 5 6 7 9
Explanation: Array elements of A1[] are
sorted according to A2[]. So 2 comes first
then 1 comes, then comes 8, then finally 3
comes, now we append remaining elements in
sorted order.

*/

// Brut Force approach 

// let A1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8]
// let A2 = [2, 1, 8, 3]
// let SortedArray = [];
// let m =0 ; 

// const a = new Set(A2);
// let newA2 = [...a]; 

// for(i=0;i<newA2.length;i++){

// for(j=0; j<A1.length; j++){

//     if(newA2[i]=== A1[j]){
//     SortedArray[m] = A1[j]; 
//     m++; 
//     }
    
// }
// }

// console.log(SortedArray);


// linear probing : 

// let A1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8]
// let A2 = [2, 1, 8, 3]
// let sortedArray = []

// let hashMap ={}

// hashMap = A1; 

// for(let i=0; i< A1.length; i++){

// if(!hashMap[A1[i]]){

// hashMap[A1[i]]= 1
// console.log('first if condition checking'+' '+ hashMap[A1[i]])
// }
// else

// hashMap[A1[i]]+=1
// console.log('else condition checking'+ ' '+ hashMap[A1[i]])
// }

// const result = []

// for(let num of A2){

//     if(hashMap[num]){

//     let amount = hashMap.num

//     }
// }


// let i =0
// console.log(hashMap)
// console.log(hashMap[7]) this will give the value of hashmap 
// let p = A2[i]  A1.length

// for(let i=0; i< A2.length; i++){

// if(A2[i]=== hashMap)

// console.log(A2[i])
// }

// for(let i=0; i<A2.length;i++)

// for(let i=1; i<hashMap.length;i++)
// {
  
    

// }

// let Comparision = () =>{

    
// }

//for(let i=1; i<hashMap.length;i++){
// 
    // console.log(hashMap[1])
//}

// function KeyComparision(x){
    
//     {    
//     if(x === hashMap[i]){
//     console.log(hashMap[i] + 'the value of x is' + x)
//     return hashMap[i];
//     }
//     else
//     return hashMap[i];
//     }
// }

// let newArray = A2.filter(KeyComparision) 

// console.log(newArray)

// console.log(Object.keys(hashMap)) 

// console.log(Object.values(hashMap)) 

// console.log(Object.entries(hashMap)) 

// let j=0; 

// for(let key of Object.keys(hashMap)){
    
//    if(A2[j] === key && j < A2.length)
//     {
//     console.log('Output Inside the loop is'+ key +' '+ A2[j])
//     sortedArray[j] = key;
//     delete hashMap[j];
//     j++;

//     }
//     // else
//     // {
   
//     // }
    
// }

// console.log(hashMap)
// console.log(Object.entries(hashMap))

// delete hashMap[2]; // used to delete a particualr entry in the hashMap 

// console.log(Object.entries(hashMap))

// console.log(sortedArray); 


// const a = new Map()

// for(let num of A1){
//     if(a.has(num))
//     {
//     a.set(num, a.get(num) +1)
//     }
    
//     else
//     {
//         a.set(num, 1)
//     }


// const a = new Map()

// for(let i=0; i<A1.length;i++){
//     if(!a.has(A1[i]))
//     {
//     a.set(A1[i], 1)
//     }
    
//     else
//     {
//     a.set(A1[i], a.get(A1[i]) +1)
//     }


// }

// let newMap = new Map([...a.entries()].sort())

// console.log(newMap)
// for(let num of A2){

//     if(a.has(num)){

//     let amount = a.get(num)
//     while(amount > 0){
//     sortedArray.push(num)
//     amount--; 
//     }    

//     a.delete(num)
//     }

// }

// // for(key of Object.keys(a))
// // {
// //     sortedArray.push(key)
// // }

// console.log(a) 
// console.log(sortedArray)

// console.log(a) 

// console.log([...a.entries()].sort())


//*************************  Array problem no 1 ******************************************** */

// Given an unsorted array A of size N that contains only non-negative integers, find a 
//continuous sub-array which adds to a given number S.

// In case of multiple subarrays, return the subarray which comes first on 
//moving from left to right.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)



// Example 1:

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements 
// from 2nd position to 4th position 
// is 12.

// let Array1 = [7,8,2,3,1,0,6,4]
// let Array1 = [7,2,6,5,3,2,0,1]

// let Array1 = [1,2,3,7,5]
// let sum = 10

// let a,b; 

// const MaxSubarray =(Array1, sum) =>{
// for(let i=0; i<Array1.length; i++)
// {
//     let MaxSum = Array1[i];
//     for(let j=i+1; j<Array1.length; j++){
       
//     MaxSum = MaxSum + Array1[j];
//     if(MaxSum === sum ){
//         a= i;
//         b =j;
//     // console.log('SubArray range is between a and b is'+ a +' '+b);
//     return[a,b];      
//     }
//     else {
//         if(MaxSum < sum)
//         continue;

//         else
//         break; 
//     }
//     }
//     }

// }

// let [c,d] = MaxSubarray(Array1, sum);

// console.log('SubArray range is between i and j is'+ c +' '+ d); 





















// ************************************** Count Triplets *******************************

// Expected Time Complexity: O(N^2)
// Expected Auxiliary Space: O(1)

// Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.
 
// Example 1:

// Input:
// N = 4
// arr[] = {1, 5, 3, 2}
// Output: 2
// Explanation: There are 2 triplets: 
// 1 + 2 = 3 and 3 +2 = 5 

// let Arry = [7,2,6,5,3,2,0,1]
// let Arry = [1,5,3,2]
// let Arry = [2,3,4]
// Arry = Arry.sort();
// console.log(Arry);
// let count =0 ; 

// for (let index = 0; index < Arry.length; index++) {

//  if((Arry[index] + Arry[index + 1]) === Arry[index + 2])
//  count++; 
    
// }

// console.log(count); 







//************************** Kadane's Alogrithm **************************************************** */

// ek ek karke elements ko add karte hue jaao jaise hi sum negative aaye to previous elements jinka
// abhi tak sum kiya hai un elements ko discard kar do aur uske aage ke array elements ko continue karo


// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

// Example 1:

// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which 
// is a contiguous subarray.

// let Arr = [1,2,3,-2,5]
// let Arr = [-1,4,7,-3, 6, -9, 14, 5] 
// Arr = Arr.sort();

// let Arr = [-1,-2,-3,-4]

// let Arr = [-1]

// let Arr = [1,2,7,-10,3,-3,4]

// console.log(Arr);

// let MaximumSum = Arr[0], counter = 0; 

// for (var index = 1; index < Arr.length; index++) {

//     MaximumSum = MaximumSum + Arr[index];

//     if(MaximumSum <= 0) 
//     {   
//         MaximumSum = 0;
//         counter++ 
//     }
    
//     if(counter === index) {
     
//         MaximumSum = -1; 
//         // console.log(counter)
//     }

// }

// console.log(index)
// console.log(MaximumSum); 




// *********************** Rain water trapping problem ***********************************

class Solution {
    // Function to find the trapped water between the blocks.
    trappingWater(arr, n)
    {
        //your code here
        
        let trapped =0 , r=2,l=0,c=1; 
        
        if(arr.length < n)
         return 0;
         
         else{
             
             for(let i=0; i<arr.length; i++){
                 
                if((arr[c] < arr[l]) && (arr[c] < arr[r]))
                {
                    if(arr[r] < arr[l])
                    {
                        trapped = trapped +(arr[r] - arr[c])
                    }
                    
                    else{
                        
                        trapped = trapped + (arr[l] - arr[c])
                    }
                    
                }
                l++;
                c++;
                r++;
             }
         }
         
         return trapped; 
    }
}

// let arr = [7,4,0,9]
let arr = [3,0,0,2,0,4]

let p = new Solution();

console.log(p.trappingWater(arr,6))