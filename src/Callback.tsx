import * as React from 'react'
import { Auth } from './Auth';

interface CallbackProps {
    auth: Auth,
}

export class Callback extends React.Component<CallbackProps,{}> {
    componentDidMount() {
        this.props.auth.handleAuthentication()
    }

    render() {
        return (
            <p>
                Authenticating...
            </p>
        )
    }
}