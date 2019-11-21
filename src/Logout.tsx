import * as React from 'react'
import { Auth } from './Auth';

interface LogoutProps {
    auth: Auth,
}

export class Logout extends React.Component<LogoutProps,{}> {
    componentDidMount() {
        this.props.auth.logout()
    }

    render() {
        return (
            <p>
                Logging out...
            </p>
        )
    }
}