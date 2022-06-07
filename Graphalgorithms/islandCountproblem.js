// Diffrent Islands in 2D array or we can say that in the Grid graph 
// This is somehow smilar to graph connected components problem 


// VVVVVVVVVVIMP :  Whenever u have an undirected graph please use the Visited set to prevent the program to 
// to stuck into the infinite loop 

const islandCount = (grid) => {

const visited = new Set();
let count = 0;     
for(let r=0; r<grid.length; r =r+1){
    for(let c=0; c<grid[0].length; c =c+1)
    // explore(grid, r, c, visited); // r =row, c = column
    if(explore(grid, r, c, visited) === true){

        count= count +1; 
    }
}    

return count;
}

const explore = (grid, r,c, visited) =>{
const rowInbounds = 0 <= r && r< grid.length;
const colInbounds = 0 <= r && r< grid.length;

if(!rowInbounds || !colInbounds) return false;
if(grid[r][c] === 'w') return false; 

const pos = r+','+ c;
if(visited.has(pos)) return false; 
visited.add(pos); // The above two lines of code is usually called cycle prevention logic


explore(grid, r-1, c, visited);
explore(grid, r+1, c, visited);
explore(grid, r, c-1, visited);
explore(grid, r, c+1, visited);


return true; 

}