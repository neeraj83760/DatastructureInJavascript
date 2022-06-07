// Is there is a path between my neighbour and destination
// Used Depth first traversal with recursion to find is there is any path between source and
// destination node  

// const hasPath = (graph, src, dst) =>{

//     if(src === dst) return true;
    
//     for(let neighbor of graph[src]){

//         if(hasPath(graph, neighbor, dst)=== true){

//             return true;
//         } 

//     }

//     return false; 
// }



// hasPath problem using breadth first search algorithm 

const hasPath = (graph, src, dst) =>{

const queue = [src]    

while(queue.length > 0){

    const current = queue.shift();
    if(current === dst) return true;
    for(let neighbor of graph[current]){

        queue.push(neighbor);
    } 
    
}

return false; // it means there is no path between source and destination node 

}

const graph = {

    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'], 
    e: [], 
    f: [] 
};

console.log(hasPath(graph, 'd', 'e'));
