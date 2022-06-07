// Permutations is set of all diffrent elements where order does matter 
// Time complexity : O(n!)
// Space : O(n^2)

const Permutations = (elements) =>{

    if(elements.length === 0) return [[]];
    const firstEL = elements[0];
    const rest = elements.slice(1);

const permsWithoutFirst = Permutations(rest);

const allPermutations = [];

permsWithoutFirst.forEach(perm =>{

    for(let i=0; i<=perm.length; i++){

    const permWithFirst = [...perm.slice(0,i), firstEL, ...perm.slice(i)];
    // arr =['a','b','c','d','o','e']; i=2 which is 'c' [...arr.slice(0,i),'x',...arr.slice(i)]

    allPermutations.push(permWithFirst);
    
    
    }
})

return allPermutations; 
}

// console.log(Permutations(['a','b','c']));
console.log(Permutations(['b','c']));