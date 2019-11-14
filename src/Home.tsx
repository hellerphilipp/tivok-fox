import * as React from 'react'
import { Auth } from './Auth';

interface HomeProps {
    auth: Auth,
}

export class Home extends React.Component<HomeProps,{}> {
    render() {
        return (
            <p>
                Successfully logged in!
            </p>
        )
    }
}