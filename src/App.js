import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NaviBar} from "./komponentit/NaviBar";
import {Etusivu} from "./komponentit/Etusivu";
import {Login} from "./komponentit/Login";
import {Register} from "./komponentit/Register";
import {Logout} from "./komponentit/Logout";
import {MyPage} from "./komponentit/MyPage";
import {getCurrentUser} from "./komponentit/rekisteroityminen";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    loadCurrentUser() {
        this.setState({
            isLoading: true
        });
        return getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
            }).catch(error => {
                this.setState({
                    isLoading: false
                });
            });
    }

    componentWillMount() {
        this.loadCurrentUser();
    }

    // Kirjaudutaan ulos, nollataan autentikointi ja käyttäjätiedot
    handleLogout(redirectTo = "/") {
        this.setState({
            currentUser: null,
            isAuthenticated: false
        });

    }

    // Kirjaudutaan sisään. Haetaan nykyisen käyttäjän tiedot ja autentikointi.
    handleLogin() {

        this.loadCurrentUser();
    }

    render() {


        return (
            <Router>
                <div className="App">

                    <NaviBar kayttaja={this.state.isAuthenticated} kayttajanimi={this.state.currentUser}/>
                    <Switch>
                        <Route exact={true} path='/'
                               render={(props) => <Etusivu history={this.props.history} logindone={this.handleLogin}
                                                           kayttaja={this.state.currentUser}
                                                           isAuthenticated={this.state.isAuthenticated} {...props}/>}/>


                        <Route path="/home"
                               render={(props) => <Etusivu history={this.props.history} logindone={this.handleLogin}
                                                           kayttaja={this.state.currentUser}
                                                           isAuthenticated={this.state.isAuthenticated} {...props}/>}/>>
                        <Route path="/login"
                               render={(props) => <Login history={this.props.history} logindone={this.handleLogin}
                                                         kayttaja={this.state.currentUser}
                                                         isAuthenticated={this.state.isAuthenticated} {...props}/>}/>
                        <Route path="/mypage"
                               render={(props) => <MyPage appi={this.loadCurrentUser} history={this.props.history}
                                                          logindone={this.handleLogout}
                                                          kayttaja={this.state.currentUser}
                                                          isAuthenticated={this.state.isAuthenticated} {...props}/>}/>

                        <Route path="/register" component={Register}/>
                        <Route path="/logout"
                               render={(props) => <Logout history={this.props.history} logindone={this.handleLogout}
                                                          kayttaja={this.state.currentUser}
                                                          isAuthenticated={this.state.isAuthenticated} {...props}/>}/>
                    </Switch></div>
            </Router>
        );


    }
}

export default App;