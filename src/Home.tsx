import * as React from 'react'
import { Auth } from './Auth'
import { Sidebar } from './components/Sidebar'
import "./tailwind.css"
import { Headerbar } from './components/Headerbar'

interface HomeProps {
    auth: Auth,
    page: string
}

export class Home extends React.Component<HomeProps,{}> {
    render() {
        return (
            <div className="h-screen flex">
                <Sidebar page={this.props.page}/>
                <div className="flex-1 min-w-0 bg-white">
                    <Headerbar page={this.props.page}/>
                    <div className="overflow-auto"></div>
                </div>
            </div>
        )
    }
}