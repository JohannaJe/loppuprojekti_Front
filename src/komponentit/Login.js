import React from 'react';
import './Login.css';


export class Login extends React.Component {
    render(){
        return(
            <div className = "loginreuna">
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password"/>
                <button class="btn btn-success" type="submit">
                    Log in
                </button>
            </div>
        );
    }
}