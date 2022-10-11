export default function FillBoard (rows, cols, mines){
    let grid = [];
    let minesPlaced = 0;

    for(let y = 0; y < cols ; y++){
        let row = [];
        for(let x = 0; x < rows; x++){
            row.push({
                x: x,
                y: y,
                value: 0,
                isFlagged: false,
                isRevealed: false,
            });
        }
        grid.push(row);
    }
    while(minesPlaced < mines){
        let i = Math.floor(Math.random()*rows);
        let j = Math.floor(Math.random()*cols);
        if(grid[j][i].value === 0){
            grid[j][i].value = -1;
            minesPlaced++;
        }
    };

    for(let y = 0; y < cols; y++){
        for(let x = 0; x < rows; x++){
            if(grid[y][x].value === -1){
                continue;
            }
            
            //top
            if(y > 0 && grid[y-1][x].value === -1){
                grid[y][x].value++;
                
            }
            //bottom
            if(y < cols - 1 && grid[y+1][x].value === -1){
                grid[y][x].value++;
                
            }
            //left
            if(x > 0 && grid[y][x-1].value === -1){
                grid[y][x].value++;
            }
            //right
            if(x < rows -1 && grid[y][x+1].value === -1){
                grid[y][x].value++;
            }
            //top-left
            if(x > 0 && y > 0 && grid[y-1][x-1].value === -1){
                grid[y][x].value++;
            }
            //top-right
            if(x < rows -1 && y > 0 && grid[y-1][x+1].value === -1){
                grid[y][x].value++;
            }
            //bottom-left
            if(x > 0 && y < cols -1 && grid[y+1][x-1].value === -1){
                grid[y][x].value++;
            }
            //bottom-right
            if(x < rows -1 && y < cols -1 && grid[y+1][x+1].value === -1){
                grid[y][x].value++;
            }
        }
    }

    return grid;
}

