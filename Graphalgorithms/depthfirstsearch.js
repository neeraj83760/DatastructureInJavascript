// take a node and keep exploring the one direction then so on, called depth first search

// Breath first search: take one node and keep all the adjecent edges first and so on 

// Iterative approach to Implement DFS

// const depthFirstPrint = (graph, source) =>{

//     const stack =[source];
    
//     while(stack.length > 0){
//         const current = stack.pop();
//         console.log(current);
//         for(let neighbor of graph[current]){
//             stack.push(neighbor);
//         }
//     }
// }; 

// Recursive approach to Implement DFS
// No Base case in the below recursive code beacuse base case means we don't have the recursive call
// once we hit the base case, the same is autmatically happened in the for of loop when we hit the 
//'e' node it's already empty so for of loop will not run for that case   

const depthFirstPrint = (graph, source) =>{

    console.log(source);
    for(let neighbor of graph[source]){
    depthFirstPrint(graph, neighbor);    
    } 
};


const graph = {

    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'], 
    e: [], 
    f: [] 
};

depthFirstPrint(graph, 'a'); // abdfce
