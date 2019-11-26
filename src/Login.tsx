import * as React from 'react'
import { Auth } from './Auth';

interface LoginProps {
    auth: Auth,
}

export class Login extends React.Component<LoginProps,{}> {
    render() {
        return (
            <div className="flex items-center justify-center w-screen h-screen">
                <button className="rounded inline-block p-3 font-bold text-white bg-blue-500 hover:bg-blue-700" onClick={this.props.auth.authorize}>
                    Login or Signup
                </button>
            </div>
        )
    }
}