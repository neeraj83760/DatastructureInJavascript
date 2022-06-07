const minimumIsland = (grid) => {

    const visited = new Set();
    let minSize = Infinity;

    let count = 0;     
    for(let r=0; r<grid.length; r =r+1){
        for(let c=0; c<grid[0].length; c =c+1){
    const size = exploreSize(grid, r, c, visited);
    if(size > 0 && size < minSize){

        minSize = size; 
    }
        }
    }

    return minSize;
};


const exploreSize = (grid, r, c, visited)=>{
    const rowInbounds = 0 <= r && r< grid.length;
    const colInbounds = 0 <= c && c< grid[0].length;   

    if(!rowInbounds || !colInbounds) return 0;
    if(grid[r][c] === 'w') return 0; // w means water in that particualr grid
    const pos = r+','+ c;
    
    if(visited.has(pos)) return 0; // duplicate position explored so return zero 
    visited.add(pos); // The above two lines of code is usually called cycle prevention logic
    
    let size = 1; 

    size += explore(grid, r-1, c, visited);
    size += explore(grid, r+1, c, visited);
    size += explore(grid, r, c-1, visited);
    size += explore(grid, r, c+1, visited);


    return size; 

}    
 