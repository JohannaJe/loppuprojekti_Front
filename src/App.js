import React, { Component } from 'react';
import './App.css';
import {
    Route,
    withRouter,
    Switch
} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';


import {NaviBar} from "./komponentit/NaviBar";
import {Etusivu} from "./komponentit/Etusivu";
import {Login} from "./komponentit/Login";
import {Register} from "./komponentit/Register";
import {PrivateRoute} from "./komponentit/PrivateRoute"
import {getCurrentUser} from "./komponentit/rekisteroityminen";
// import AppHeader from '../common/AppHeader';
// import NotFound from '../common/NotFound';
// import LoadingIndicator from '../common/LoadingIndicator';
// import PrivateRoute from '../common/PrivateRoute';

import { Layout, notification } from 'antd';
const { Content } = Layout;
// export const {isAuth}= this.state.isAuthenticated;

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
    handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
        localStorage.removeItem('accessToken');

        this.setState({
            currentUser: null,
            isAuthenticated: false
        });

        this.props.history.push(redirectTo);

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
        this.props.history.push("/");
    }











    render() {
        console.log('Onko autentikoitu', this.state.isAuthenticated)
        if(this.state.isAuthenticated) {
            return (
                <BrowserRouter>
                    <div className="App">
                        <NaviBar authenticated={this.state.isAuthenticated}/>
                        {/*<Route path="/home" component={Etusivu}/>*/}
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <PrivateRoute authenticated={this.state.isAuthenticated} path="/home" component={Etusivu} handleLogout={this.handleLogout}></PrivateRoute>
                        <Etusivu nakki={this.state.currentUser}/>
                    </div>
                </BrowserRouter>
            );
        } else {
            return (
                <BrowserRouter>
                    <div className="App">
                        <NaviBar authenticated={this.state.isAuthenticated}/>
                        {/*<Route path="/home" component={Etusivu}/>*/}
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <PrivateRoute authenticated={this.state.isAuthenticated} path="/home" component={Etusivu} handleLogout={this.handleLogout}></PrivateRoute>

                    </div>
                </BrowserRouter>
            );
        }
    }
}

export default App;
