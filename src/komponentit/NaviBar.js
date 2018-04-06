import React from 'react';
import { Link } from 'react-router-dom'

export class NaviBar extends React.Component {
    render() {
        return (
            <div className="App">



                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">Need4Feed</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li><Link to={"/home"}>Home</Link></li>
                            <li><a href="#">My Page</a></li>
                            <li><a href="#">Something</a></li>
                        </ul>
                        <form className="navbar-form navbar-left" action="/action_page.php">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" name="search"></input>
                            </div>
                            <button type="submit" className="btn btn-default">
                                <i className="glyphicon glyphicon-search"></i></button>
                        </form>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><Link to={"/login"}>Login</Link></li>
                            <li><Link to={"/register"}>Register</Link></li>
                        </ul>
                    </div>
                </nav>



            </div>
        );
    }
}
