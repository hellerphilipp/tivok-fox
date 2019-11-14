import * as React from 'react'
import { Auth } from './Auth';

interface MainProps {
    auth: Auth,
}

export class Main extends React.Component<MainProps,{}> {
    render() {
        return (
            <p>
                Successfully logged in!
            </p>
        )
    }
}