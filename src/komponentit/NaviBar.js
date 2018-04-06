import React from 'react';
import {Link} from 'react-router-dom'
import Feed100 from "../Feed100.jpg"

export class NaviBar extends React.Component {
    render() {
        return (
            <div className="App">


                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">

                        <div className="navbar-header">


                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>

                            </button>
                            <a className="navbar-brand">
                                <img src={Feed100} width="120" heigth="70" />
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="mainNavBar">
                            <ul className="nav navbar-nav">
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
                            <ul className="nav navbar-nav navbar-right">
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
