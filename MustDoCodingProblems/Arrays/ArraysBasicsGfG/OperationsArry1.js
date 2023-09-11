// The fixed sized arrays

let arr = [1,7,9, 101, 8, 66, 17, 0, 99, 5] ;

console.log(arr.length)


// arr.push(88);

// arr.pop(9);

console.log(arr.indexOf(17))

// arr.forEach(x => x*2)

// console.log(arr); 

// *********************** Delete Operation in an Array *******************************

// function deleteElement(arr, element){
    
//     for(let i=0; i<arr.length; i++)
//     {
//         if(arr[i]=== element){
            
//             arr[i] = 0;
//             for(let j= i+1; j< arr.length; j++)
//             {
//             arr[j-1] = arr[j]; 
//             }

//             arr.length = arr.length - 1   
//         }
          
//     }

//     return arr; 

// }

// let updatedArr = deleteElement(arr, 66);


// console.log(updatedArr); 

// console.log(arr.indexOf(17))


// *********************   Largest element in an arry *****************************

// function LargestElement(arr){

// let max = arr[0] ; 

// for(let i= 1; i<arr.length; i++)
// {
//     if(arr[i] > max)
//     max = arr[i];
// }

// return max; 

// }

// console.log('Largest element in an Array is', LargestElement(arr));


// ******************  Check if an Array is Sorted or not **********************

// function IsSorted(arr){

// for(let i= 0; i<arr.length; i++)
// {
//     if(arr[i] > arr[i+1])  return 0;
    
// }

// return 1;
// }

// let arr1 = [23,67,88,99]

// let arr2 = [5,7,9,11,5]

// let arr3 = [12,4,6,77,8]

// IsSorted(arr3) ? console.log('Array is sorted!'): console.log('Array is not sorted!')


// ********************* Second Largest Element in an Array **************************

// let arr = [1,7,9, 101, 8, 66, 17, 0, 99, 5] ;


// function SecondLargestElement(arr){

// let max = arr[0], secondLargest; 

// for(let i= 1; i<arr.length; i++)
// {
//     if(arr[i] > max ){
        
//         secondLargest = max;  
//         max = arr[i];

//     }
    
    


    
// }

// return max; 

// }

// console.log('Largest element in an Array is', SecondLargestElement(arr));


// ************************* Reverse An Array ****************************

// function revArray(arr){

//     let startPointer = 0 , endPointer = arr.length, temp;

//     for(let i= 0; i<arr.length; i++)
//      {
//             temp = arr[startPointer];
//             arr[startPointer] = arr[endPointer];
//             arr[endPointer] = temp; 
//             startPointer++;
//             endPointer--;

//             if(startPointer === endPointer)
//             return arr;

//      }
// }

// console.log(revArray(arr));

// ****************************** Remove duplicates from the sorted Array ********************************

// let arr2 = [2,4,5,6,6,6,7,7,8,9,11,12,12], arr3 = []

// function remDupfromArr(arr2){

//     for(let i= 0; i<arr2.length; i++){

//         if(arr2[i]!== arr2[i+1]) arr3.push(arr2[i]); 

//         // if(arr2[i] === arr2[i+1]) i++;
//     }
    
    
//     return arr3;

// }

// console.log(...remDupfromArr(arr2));

// **************************** Left Rotate an Array by one *************************************

// Example arr = [1,2,3,4,5] after rotation [2,3,4,5,1]

// function LeftRotation(arr){

//     let temp = arr[0];
    
//     for(let i= 1; i<arr.length; i++)
//     {
     
//         arr[i-1]= arr[i];


//     }
    
//     arr[arr.length -1] = temp;

//     return arr; 

// }

// console.log(LeftRotation(arr));

// console.log(LeftRotation(arr));

// console.log(LeftRotation(arr));


// ************************  Left Rotate an Array by D places *******************************

function NplacesLRotation(arr, places){

    for(let i= 1; i<= places; i++){

        let temp = arr[0];
    
    for(let i= 1; i<arr.length; i++)
    {
        arr[i-1]= arr[i];
    }
    
    arr[arr.length -1] = temp; 
        
    }

    return arr;
    
}

console.log(...NplacesLRotation(arr, 3)); 


// ***********************  Move Zero's to End *********************************************

// arr[] = {8,5, 0, 10, 0, 20} output : arr[] = { 8, 5, 10, 20, 0, 0}
// arr[] ={0,0,5,7,8,0 0 0 0 0 26 0 0 1}  arr[] = {5, 7, 8, 26, 1} 

function MoveZerosAttheEnd(){
     
    let numPointer=0, ZeroPionter=0; 
    for(let i= 0; i<arr.length; i++)
    {
        if(arr[i]!== 0 && i!==0) 
        numPointer = i;
        
        if(arr[i]=== 0)
        ZeroPionter = i;

        if(numPointer > ZeroPionter) swap(arr[ZeroPionter], arr[numPointer])



        
    }

}