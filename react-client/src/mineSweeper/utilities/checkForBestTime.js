export const checkForBestTime = (rows , cols , seconds, minesweeper) =>{
    switch(rows + cols){
        case 18:
            if(seconds < minesweeper.beginnerBestTime){
                return 1
                
            }
            else{
                return 0;
                
            }
            break;
        case 24:
            if(seconds < minesweeper.noviceBestTime){
                return 2
            }
            else{
                return 0;
            }
            break;
        case 32:
            if(seconds < minesweeper.intermediateBestTime){
                return 3
                
            }else{
                return 0;
                
            }
            break;
        case 46:
            if(seconds < minesweeper.expertBestTime){
                return 4;
                
            }else{
                return 0;
                
            }
            break;
        case 54:
            if(seconds < minesweeper.masterBesttime){
                return 5
            }else{
                return 0
            }
        default:
            return 0;
    }
}