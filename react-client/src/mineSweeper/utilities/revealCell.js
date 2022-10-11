export default function RevealCell(grid,x,y) {
    let cells = [];
    cells.push(grid[y][x]);

    while(cells.length > 0){
        let cell = cells.pop();
        let x = cell.x;
        let y = cell.y;
        grid[y][x].isRevealed = true;

        if(cell.value !== 0){
            break;
        }

        //top
        if(y > 0 && grid[y-1][x].value === 0 && !grid[y-1][x].isRevealed && !grid[y-1][x].isFlagged){
            cells.push(grid[y-1][x]);
        }
        //bottom
        if(y < grid.length -1 && grid[y+1][x].value === 0  && !grid[y+1][x].isRevealed && !grid[y+1][x].isFlagged){
            cells.push(grid[y+1][x]);
        }
        //left
        if(x > 0 && grid[y][x-1].value === 0  && !grid[y][x-1].isRevealed && !grid[y][x-1].isFlagged){
            cells.push(grid[y][x-1]);
        }
        //right
        if(x < grid[0].length -1 && grid[y][x+1].value === 0  && !grid[y][x+1].isRevealed && !grid[y][x+1].isFlagged){
            cells.push(grid[y][x+1]);
        }
        //top-left
        if(x > 0 && y > 0 && grid[y-1][x-1].value === 0  && !grid[y-1][x-1].isRevealed && !grid[y-1][x-1].isFlagged){
            cells.push(grid[y-1][x-1]);
        }
        //top-right
        if(x < grid[0].length -1 && y > 0 && grid[y-1][x+1].value === 0  && !grid[y-1][x+1].isRevealed && !grid[y-1][x+1].isFlagged ){
            cells.push(grid[y-1][x+1]);
        }
        //bottom-right
        if(x < grid[0].length -1 && y < grid.length -1 && grid[y+1][x+1].value === 0  && !grid[y+1][x+1].isRevealed && !grid[y+1][x+1].isFlagged){
            cells.push(grid[y+1][x+1]);
        }
        //bottom-left
        if(x > 0 && y < grid.length -1 && grid[y+1][x-1].value === 0  && !grid[y+1][x-1].isRevealed && !grid[y+1][x-1].isFlagged){
            cells.push(grid[y+1][x-1]);
        }

        //REVEAL
        //top
        if(y > 0 && !grid[y-1][x].isRevealed && !grid[y-1][x].isFlagged && grid[y-1][x].value !== -1){
            grid[y-1][x].isRevealed = true;
        }
        //bottom
        if(y < grid.length -1 && !grid[y+1][x].isRevealed && !grid[y+1][x].isFlagged && grid[y+1][x].value !== -1 ){
            grid[y+1][x].isRevealed = true;
        }
        //left
        if(x > 0 && !grid[y][x-1].isRevealed && !grid[y][x-1].isFlagged && grid[y][x-1].value !== -1){
            grid[y][x-1].isRevealed = true;
        }
        //right
        if(x < grid[0].length -1 && !grid[y][x+1].isRevealed && !grid[y][x+1].isFlagged && grid[y][x+1].value !== -1){
            grid[y][x+1].isRevealed = true;
        }
        //top-left
        if(x > 0 && y < 0 && !grid[y-1][x-1].isRevealed && !grid[y-1][x-1].isFlagged && grid[y-1][x-1].value !== -1){
            grid[y-1][x-1].isRevealed = true;
        }
        //top-right
        if(x < grid[0].length -1 && y > 0 && !grid[y-1][x+1].isRevealed && !grid[y-1][x+1].isFlagged && grid[y-1][x+1].value !== -1){
            grid[y-1][x+1].isRevealed = true;
        }
        //bottom-left
        if(x > 0 && y < grid.length -1 && !grid[y+1][x-1].isRevealed && !grid[y+1][x-1].isFlagged && grid[y+1][x-1].value !== -1){
            grid[y+1][x-1].isRevealed = true;
        }
        //bottom-right
        if(y < grid.length -1 && x < grid[0].length -1 && !grid[y+1][x+1].isRevealed && !grid[y+1][x+1].isFlagged && grid[y+1][x+1].value !== -1){
            grid[y+1][x+1].isRevealed = true;
        }
    }
    
    return grid
}