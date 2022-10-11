import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { SignUpForm } from './forms/signUpForm';
import { Login } from './forms/loginForm';

function App() {

  const [data, setData] = React.useState(null);
  const [points, setPoints] = React.useState(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState()

  React.useEffect(()=> {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => {setData(res.message); setPoints(res.points)})
  } , []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {!data ? "Loading..." : data} </p>
        <p>Points: {!points ? "Loading.." : points} </p>
        <p>{points}</p>
        <SignUpForm />
        <Login />
      </header>
      
    </div>
  );
}

export default App;