// let arr = [7,8,9,1,2,4,4,4,4,2,7,3]

// let string = ['neeraj', 'johny', 'sameer', 'sunil','rahul', 'neeraj','johny']

// let str = 'Ramesh' 

// using of map function 
// let Mul2Arry = arr.map(mul => mul*2) 

// console.log(Mul2Arry);
// using of spread operators 

// console.log([...arr, ...Mul2Arry]); 

// for(let s of arr){

//     console.log(s);
// }

    // for(let s in arr){

    //     console.log(s); // it will return where the indexes where placed
    //     // console.log(arr[s]); 
    // }


// let s = new Set(arr);
// let s = new Set(string);

// s = arr;

// console.log(...s); 

// console.log(string[1].length);
// console.log(string[2].charAt(5));

// Below program is to reverse the srting : which is actaully an Incorrect code :)

// let strRev =[]
// for(let i=0; i<=str.length; i++){

// strRev = str[str.length - i];
// strRev[i++]; 
// }

// console.log(strRev);

//***********************************/

// const table = Array(3).fill(7)

// const newArray = [3]; 

// // console.log(table); 
// console.log(newArray)

// console.log(sizeof(table)); 

// Learn how a map/dictionary/hash table works underneath the hood by implementing your 
//own version in JavaScript.

// const person = {}

// person['fname'] = 'jonhy'
// person['lname'] =  'sins'

// console.log(person);
//*********************************************************** */

// 'use-strict';

const ps = require("prompt-sync");
// const prompt = ps();
const prompt = ps({sigint: true}) // argument sigint shows that if the 
// intrrupt signal is generated then treat it accordingly ..for example
// if user is not entering any name and directly press ctrl+d 
// then the program terminates accordingly ...that we can proceed accordingly 

let name = prompt("Enter your name");
console.log(`hello ${name}`)