import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {NaviBar} from "./komponentit/NaviBar";
import {Etusivu} from "./komponentit/Etusivu";
import {Login} from "./komponentit/Login";
import {Register} from "./komponentit/Register";
import {Logout} from "./komponentit/Logout";
import {getCurrentUser} from "./komponentit/rekisteroityminen";
import {notification} from 'antd';

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

        notification.config({
            placement: 'topRight',
            top: 70,
            duration: 3,
        });
    }

    loadCurrentUser() {
        this.setState({
            isLoading: true
        });
        getCurrentUser()
            .then(response => {
                console.log('Nykyisen käyttäjän tiedot', response)
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

    // Handle Logout, Set currentUser and isAuthenticated state which will be passed to other components
    handleLogout(redirectTo = "/", notificationType = "success", description = "You're successfully logged out.") {
        // localStorage.removeItem('accessToken');

        this.setState({
            currentUser: null,
            isAuthenticated: false
        });

        // this.props.history.push(redirectTo);

        notification[notificationType]({
            message: 'Polling App',
            description: description,
        });
    }

    /*
     This method is called by the Login component after successful login
     so that we can load the logged-in user details and set the currentUser &
     isAuthenticated state, which other components will use to render their JSX
    */
    handleLogin() {
        notification.success({
            message: 'Polling App',
            description: "You're successfully logged in.",
        });
        this.loadCurrentUser();
        //this.props.history.push("/");
    }


    render() {
        console.log('Onko autentikoitu? = ', this.state.isAuthenticated)

            return (
                <Router>
                    <div className="App">

                        <NaviBar kayttaja={this.state.isAuthenticated} kayttajanimi={this.state.currentUser}/>
                        <Switch>
                            <Route exact={true} path='/' render={(props) => <Etusivu history={this.props.history} logindone={this.handleLogin} kayttaja={this.state.currentUser}
                                                                                                         isAuthenticated={this.state.isAuthenticated} {...props}/>}/>


                            <Route path="/home" render={(props) => <Etusivu history={this.props.history} logindone={this.handleLogin} kayttaja={this.state.currentUser}
                                                                          isAuthenticated={this.state.isAuthenticated} {...props}/>}/>>
                            <Route path="/login" render={(props) => <Login history={this.props.history} logindone={this.handleLogin} kayttaja={this.state.currentUser}
                                                                           isAuthenticated={this.state.isAuthenticated} {...props}/>}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/logout" render={(props) => <Logout history={this.props.history} logindone={this.handleLogout} kayttaja={this.state.currentUser}
                                                                             isAuthenticated={this.state.isAuthenticated} {...props}/>}/>
                        </Switch></div>
                </Router>
            );


    }
}

export default App;
