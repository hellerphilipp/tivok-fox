import * as React from 'react'
import { Auth } from './Auth';

interface LoginProps {
    auth: Auth,
}

export class Login extends React.Component<LoginProps,{}> {
    render() {
        return (
            <p>
                <button onClick={this.props.auth.authorize}>Click to login</button>
            </p>
        )
    }
}