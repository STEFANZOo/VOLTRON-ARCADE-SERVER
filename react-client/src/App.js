import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { SignUpForm } from './forms/signUpForm';
import { Login } from './forms/loginForm';
import {AccountModal} from './forms/modal'

function App() {

  const [data, setData] = React.useState(null);
  const [points, setPoints] = React.useState(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();

  const [showing , setIsShowing] = useState(false);

  React.useEffect(()=> {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => {setData(res.message); setPoints(res.points)})
  } , []);



  return (
    <div className="App">
      <header className="App-header">
        <h1>Eternal Universe</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={{color: '#61dafb '}}>Electron Arcade</h2>
        <Login />

        <AccountModal showing={showing} setIsShowing={setIsShowing} />
        <p>New Player?</p>
        <button onClick={()=> setIsShowing(true)} style={{backgroundColor: '#61dafb'}}><b>Create New Account</b></button>
      </header>
      
      
      
    </div>
  );
}

export default App;

/*
<p> {!data ? "Loading..." : data} </p>
        <p>Points: {!points ? "Loading.." : points} </p>
*/