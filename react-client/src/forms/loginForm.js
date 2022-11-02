import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

export function Login(props) {

    const [formValue, setFormValue] = useState({username: "", password: ""});
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [showing, setShowing] = useState(false);

    /*

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();

    */

    const handleSubmit = async e => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        formdata.append("username", formValue.username);
        formdata.append("password" , formValue.password);
        try{
            const response = await axios.post('/login' , formValue)
            const wallet = response.data;
            navigate('/profile', {state: {wallet}});
        }
        catch(error){
            const err = await error.response.data;
            setError(err)
            setShowing(true)
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
            <form method="post" action="/login" onSubmit={handleSubmit} >
                <h3>Log In!</h3>
                <input type='text' name="username"  placeholder="Enter username" value={formValue.username} onChange={handlechange} required style={{backgroundColor: 'white'}}></input>
                <br></br>
                <input type='text' name="password"  placeholder="Enter password" value={formValue.password} onChange={handlechange} required style={{backgroundColor: 'white'}}></input>
                <br></br>
                <button type='submit' value='Login'  style={{backgroundColor:'chartreuse'}}><b>Login</b></button>
            </form>
            {!showing ? '' : <div style={{backgroundColor: 'black', width: '50%', height: '50%', border: '5px solid chartreuse', padding: '20px', text: 'white', position: 'absolute'}}>
                <button onClick={()=>setShowing(false)} style={{float: 'right'}}>&times;</button>
                <h2>oops!</h2>
                <p>{error ? error.message : ''}</p>
                <p>{error ? error.error : ''}</p>
                </div>}
        </>
    )
}