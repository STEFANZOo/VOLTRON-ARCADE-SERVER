import React , {useState} from "react";
import axios from 'axios';

export function SignUpForm(props) {

    const [formValue, setFormValue] = useState({username: "", password: ""});
    const [message , setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        formdata.append("username", formValue.username);
        formdata.append("password" , formValue.password);
        try {
            const response = await axios.post('/signUp' , formValue)
            const data = await response.data;
            setMessage(data);
            console.log(message)
        }
        catch(error) {
            //console.log(error.response.data)
            const err = await error.response.data
            setError(err)
            console.log(error)
        }
        
        
        
    };

    const handlechange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
        
        {!message && !error ? 
        <form method='post' action='/signUp'onSubmit={handleSubmit}>
            <h2>Sign Up!</h2>
            <input type='text' name='username' placeholder='Enter Name...(min 3)' required onChange={handlechange} value={formValue.username}></input> <br></br>
            <input type='text' name='password' placeholder='Enter a password (min 6)' required onChange={handlechange} value={formValue.password}></input> <br></br>
            <input type='submit' value='Sign Up!'></input>
        </form> : !error ? message.message : error.message
        }
           
            
            <p>{!error ? '' : error.error}</p>
        </>
    )
}