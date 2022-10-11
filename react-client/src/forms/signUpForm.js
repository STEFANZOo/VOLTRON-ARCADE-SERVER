import React from "react";

export function SignUpForm(props) {
    return (
        <form method='post' action='/signUp'>
            <h2>Sign Up!</h2>
            <label>Enter a Username:</label>
            <input type='text' name='username' placeholder='Enter Name...' required></input>
            <input type='text' name='password' placeholder='password' required></input>
            <input type='submit' value='Sign Up!'></input>
        </form>
    )
}