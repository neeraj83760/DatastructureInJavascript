// can we construct a word using the the words given in an array of words
// BrutForce solution for the problem 

// const canConstruct = (target, wordBank) => {

// if(target === '') return true; 

// for(let word of wordBank){

//     if(target.indexOf(word)===0){ // best way to check wether the substring is a prefix of the
//         // another string ..ex :  potato.indexof('pot') will give u 0 
//         // potato.indexof('ato') will give u 2 as an output 
//     const suffix = target.slice(word.length);
//     if(canConstruct(suffix, wordBank) === true){ // this function call return the boolean value 
//        return true;
//     }  
// }  
// }

// return false; 
// }

//  Canconstruct problem using memoization

const canConstruct = (target, wordBank, memo ={}) => {
    if(target in memo) return memo[target]; 
    if(target === '') return true; 
    
    for(let word of wordBank){
    
        if(target.indexOf(word)===0){ // best way to check wether the substring is a prefix of the
            // another string ..ex :  potato.indexof('pot') will give u 0 
            // potato.indexof('ato') will give u 2 as an output 
        const suffix = target.slice(word.length);
        if(canConstruct(suffix, wordBank, memo) === true){ // this function call return the boolean value 
            memo[target] = true;
            return true;
        }  
    }  
    }
    memo[target] = false;
    return false; 
    }




console.log(canConstruct("abcdef", ["ab","abc","cd","def","abcd"])); // true
console.log(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))//false
console.log(canConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]))//true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
])) //false
