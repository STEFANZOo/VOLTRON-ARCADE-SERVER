import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

export function Login(props) {

    const [formValue, setFormValue] = useState({username: "", password: ""});
    const navigate = useNavigate();

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
        const response = await axios.post('/login' , formValue)
        const wallet = response.data;
        navigate('/profile', {state: {wallet}});
    };

    const handlechange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }
    

    return (
        <form method="post" action="/login" onSubmit={handleSubmit} >
            <h1>Log In!</h1>
            <input type='text' name="username"  placeholder="Enter username" value={formValue.username} onChange={handlechange} required></input>
            <input type='text' name="password"  placeholder="Enter password" value={formValue.password} onChange={handlechange} required></input>
            <input type='submit' value='Login'></input>
        </form>
    )
}