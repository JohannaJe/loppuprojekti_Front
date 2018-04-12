import React, {Component} from 'react';
import './Kuvaus.css';

export class Kuvaus extends React.Component {
    render(){
        return(
            <div className = "kuvaus">
                    <p><b>With <font color="#0099ff">Need4Feed</font> you can save your preferences </b></p>
                    <p><b>and create your own feed with only the things you love!</b></p>
                    <p><b>Just <a href={"/register"}> SIGN UP </a> and build </b></p>
                    <p></p>
                    <br/>
                <div className = "bubble">
                    <p><b>Your Personal Bubble</b></p>

            </div>
            </div>

        );
    }
}
