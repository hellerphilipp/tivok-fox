import * as React from 'react'
import { Auth } from './Auth'

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
            <p>Hey!</p>
        )
    }
}