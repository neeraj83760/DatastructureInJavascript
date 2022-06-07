// n is the number of nodes and e is the number of edges 

// Time complexity of this problem is : O(e) 
// Space complexity : O(n)

const largestComponent = (graph) => {
const visited = new Set(); 
let largest = 0;
for(let node in graph){

const size = exploreSize(graph, node, visited);

if(size > longest) longest = size; 
}

 return longest; 
}


const exploreSize = (graph, node, visited) =>{

if(visited.has(node)) return 0;

visited.add(node);

let size =1; // it represents the current node we are at 
for(let neighbor of graph[node]){
size += exploreSize(graph, neighbor, visited);

} 

return size; 

}
    
    connectedComponentsCount({
        0: [8, 1, 5],
        1: [0],
        5: [0, 8],
        8: [0, 5],
        2: [3, 4],
        3: [2, 4],
        4: [3, 2]
      }); // -> 2
      