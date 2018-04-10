import React from 'react';
import {Link} from 'react-router-dom'
import Feed100 from "../Feed100.jpg"

export class NaviBar extends React.Component {

    render() {
        var kirjautunut = this.props.kayttaja
        // console.log(this.props.kayttajanimi.name)

        if (kirjautunut) {
            var kayttajanimi = this.props.kayttajanimi.username;
            return (
                <div className="App">


                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">

                            <div className="navbar-header">


                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>

                                </button>
                                <a className="navbar-brand">
                                    <img src={Feed100} alt="" width="120" heigth="70" />
                                </a>
                            </div>

                            <div className="collapse navbar-collapse" id="mainNavBar">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to={"/home"}>Home</Link></li>
                                    <li><Link to={"/mypage"}>Kirjautuneena: {kayttajanimi}</Link></li>
                                    <li><Link to={"/logout"}>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>


                </div>
            );

        } else {


        return (
            <div className="App">


                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">

                        <div className="navbar-header">


                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>

                            </button>
                            <a className="navbar-brand">
                                <img src={Feed100} alt="" width="120" heigth="70" />
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="mainNavBar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to={"/Etusivu"}>Home</Link></li>
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
}
