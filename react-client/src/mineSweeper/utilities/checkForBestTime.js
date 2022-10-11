export const checkForBestTime = (rows , seconds, minesweeper) =>{
    switch(rows){
        case 10:
            if(seconds < minesweeper.beginnerBestTime){
                return 1
                
            }
            else{
                return 0;
                
            }
            break;
        case 16:
            if(seconds < minesweeper.intermediateBestTime){
                return 2
                
            }else{
                return 0;
                
            }
            break;
        case 30:
            if(seconds < minesweeper.expertBestTime){
                return 3;
                
            }else{
                return 0;
                
            }
            break;
        default:
            return 0;
    }
}