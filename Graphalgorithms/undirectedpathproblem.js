// connections in both the directions 

// We will given an edge list for an Undirected graph ..means every pair in the 
// edgelist represents between connections between two nodes 
// also we can travel in both directions between edges 

// First we need to convert undirected graph edgelist to adjacency list 

const undirectedPath = (edges, nodeA, nodeB) =>{

    const graph = buildGraph(edges);
    // console.log(graph); 
    return hasPath(graph,nodeA,nodeB, new Set()); // in set addition and deletion of the elements
    // are in O(1) time ... we are passing this extra argument just the check wether there is a 
    // cycle in the graph or not 
    // if we take a simple arry it will take O(n) time 

}

const hasPath = (graph, src, dst, visited) =>{
    
    if(src === dst) return true;
    if(visited.has(src)) return false; // if we already visited any node we will not visit it again 
    
    visited.add(src); 
    
    for(let neighbor of graph[src]){ // as per the Input we have given in edges ,for first Iteration 
    //   ['i','j'], the vaule is i and in the second Iteration it will be j and so on and so forth
    
    if(hasPath(graph, neighbor, dst, visited)=== true) return true; // dst is fixed unlike the src that's why we have passsed 
    // the respective values ... the above if condition means if there is a path between neighbor and
    // dest then there must be a path between src and dst 
    
    
    } 

return false;

};

const buildGraph = (edges) =>{

    const graph = {}
    
    for(let edge of edges){ // will take each pair of edge one by one and try to create an adjency list
    // accordingly

    const [a,b] = edge; // this is called array destructuring 
    if(!(a in graph)) graph[a] = [];
    if(!(b in graph)) graph[b] = [];
    graph[a].push(b);  // needs our adjecency list needs to be symmeteric anyway
    graph[a].push(b);  //b's neighbor should be of a's and a's neighbor should be of b's meighbor 
    }
    return graph;

}

// the below edgelist we first need to convert this to adjency list 
// const edges = [

//     ['i','j'],
//     ['k','i'],
//     ['m','k'],
//     ['k','l'],
//     ['o','n']


// ]

// undirectedPath(edges, 'j','m'); //true


