// Breadth first search algorithm is only possible Iteratively 
// It also use the Queue data structure 

// VVVIMP : If u use an inbuilt method array.shift + array.push which means
// deleting from the begnining and adding from the end it will form the stack 

const breadthFirstPrint = (graph, source) => {

    const queue = [source];
    while(queue.length > 0){

    const current = queue.shift();
    console.log(current);
    for(let neighbor of graph[current]){

        queue.push(neighbor);
    }
    } 
}

const graph = {

    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'], 
    e: [], 
    f: [] 
};

breadthFirstPrint(graph, 'a'); // acbedf