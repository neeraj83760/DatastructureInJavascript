// In the shortest path problem if you've given the edgelist then we first need to convert it
// to the adjacencylist first 

// Wether u follow the BFS or DFS for the traversal it's totally depends on the graph which 
// u want to traverse to find the shortest path 

const shortestPath = (edges, nodeA, nodeB) => {
const graph = buildGraph(edges);
const visited = new Set([nodeA]); // this line is just for to keep a track of visted node, otherwise
// it fall under the infinite cycle loop 
// if some node is added to the queue is also be marked as visited  
// If we Initalize our queue variable by 'nodeA' this it's also be initalize the set()

// If u Initalize the set constructor in Javascript like : new Set([nodeA]) 

const queue = [[nodeA, 0]]; // not only keep a track of adjacent nodes but also the distance from that
// node as well .. in the start th  e nodeA is 0(which is a distance) edges away from itself  

while(queue.length > 0){

const [node, distance] = queue.shift() // queue.shift() will always give a pair so we need to destructure it first 


if(node === nodeB) return distance;
for(let neighbor of graph[node]){
    if(!visited.has(neighbor)){
    visited.add(neighbor);         
    queue.push([neighbor, distance +1]); // as we move forward the distance will also grow by one
} 
} 
}
return -1; // if we finish the while loop and if we never found the nodeB then we can just return the negative one
// which there is no such path with connect A to B 
};

const buildGraph = (edges) =>{

    const graph = {}
    
    for(let edge of edges){ // will take each pair of edge one by one and try to create an adjency list
    // accordingly

    const [a,b] = edge; // this is called array destructuring 
    if(!(a in graph)) graph[a] = [];
    if(!(b in graph)) graph[b] = [];
    graph[a].push(b);  // needs our adjecency list needs to be symmeteric anyway
    graph[b].push(a);  //b's neighbor should be of a's and a's neighbor should be of b's meighbor 
    }
    return graph;

}



const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];

 console.log(shortestPath(edges, 'w', 'z')); // -> 2