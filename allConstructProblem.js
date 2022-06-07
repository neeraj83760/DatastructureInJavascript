// Below one is the Brut force approach ....but even if u memozied this it will not
// create any massive Impact on the performace of the algorithm 

// Even after memoizing it the last "eeeeee.....f" input will run faster but remember it;s
// not the worse case .............worse case is when we create a massive subarray having
// all the pairs or combination of the words which can for given string 

// Time complexity :  O(M^n) exponential time 
// Even If u memoized it u can't improve the time complexity of the algorithm better than O(M^n) 
// Space complexity : O(m)

const allConstruct = (target, wordBank) => {

    if(target === '') return [[]];

    const result = []; 

for(let word of wordBank){
if(target.indexOf(word) === 0){
    const suffix = target.slice(word.length);
    const suffixWays = allConstruct(suffix, wordBank);
    const targetWays = suffixWays.map(way => [word, ...way]);
    result.push(...targetWays); 
}    
} 

return result;  
};



console.log(allConstruct("purple", ["purp","p","ur","le","purpl"])); // 2
/*
[
['purp', 'le']
['p','ur','p','le']
]
*/


console.log(allConstruct("abcdef", ["ab","abc","cd","def","abcd", "ef","c"])); // true
// console.log(allConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))//[]
// console.log(allConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]))//true
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee"
// ])) //[]

// VVVVVVVVIM :   There is a catch : If we just remove the f from the string "eeee....." which we given as an
// input then the answer will be too lengthy ... because then the program will return
// total number of ways to generate "eeeeeeeeeeeeee....." string 



