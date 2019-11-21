import * as React from 'react'
import { Auth } from './Auth'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Login } from './Login'
import { Home } from './Home'
import { Callback } from './Callback'
import { Logout } from './Logout'

interface AppState {
    auth: Auth
}

export class App extends React.Component<{}, AppState> {
    componentWillMount() {
        this.setState({
            auth: new Auth()
        })
    }

    render() {
        return (
            <Router>
                <Route path="/" exact component={() => 
                        this.state.auth.isAuthenticated()?<Home auth={this.state.auth} />:<Login auth={this.state.auth} />}
                />
                <Route path="/callback" exact component={() => <Callback auth={this.state.auth} />} />
                <Route path="/logout" exact component={() => <Logout auth={this.state.auth} />} />
            </Router>
        )
    }
}