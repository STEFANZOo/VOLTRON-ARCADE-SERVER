import React from "react";
import { SignUpForm } from "./signUpForm"

export  function AccountModal({showing, setIsShowing}){
    if(!showing){
        return null;
    }
    return(
        <>
           
            <div style={{backgroundColor: 'black', width: '50%', height: '50%', border: '5px solid chartreuse', padding: '20px', text: 'white', position: 'absolute'}}>
                <button onClick={()=>setIsShowing(false)} style={{float: 'right', backgroundColor: 'chartreuse'}}>&times;</button>
                <SignUpForm />
            </div>
        </>
        
    )

        
}