import * as React from 'react'
import { Auth } from './Auth'
import { Sidebar } from './components/Sidebar'
import "./tailwind.css"

interface HomeProps {
    auth: Auth,
}

export class Home extends React.Component<HomeProps,{}> {
    render() {
        return (
            <div className="h-screen flex">
                <Sidebar />
                <div className="flex-1 min-w-0 bg-white">
                    <div className="border-b-2 border-gray-200"></div>
                    <div className="overflow-auto"></div>
                </div>
            </div>
        )
    }
}