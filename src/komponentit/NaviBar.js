import React from 'react';
import {Link} from 'react-router-dom'

export class NaviBar extends React.Component {
    render() {
        return (
            <div className="App">


                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">

                        <div class="navbar-header">

                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                                <span id="sampyla" class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span id="sampyla" class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Need4Feed</a>
                        </div>

                        <div class="collapse navbar-collapse" id="mainNavBar">
                            <ul class="nav navbar-nav">
                                <li><Link to={"/home"}>Home</Link></li>
                                <li><a href="#">My Page</a></li>
                            </ul>


                            <form className="navbar-form navbar-left" action="/action_page.php">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search"
                                           name="search" ></input>
                                </div>
                                <button type="submit" className="btn btn-default">
                                    <i className="glyphicon glyphicon-search"></i></button>
                            </form>
                            <ul class="nav navbar-nav navbar-right">
                                <li><Link to={"/register"}>Sign Up</Link></li>
                                <li><Link to={"/login"}>Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </div>
        );
    }
}
