import * as React from 'react'
import { Auth } from './Auth'
import "./tailwind.css"
import { SidebarLink } from './components/SidebarLink'

interface HomeProps {
    auth: Auth,
}

export class Home extends React.Component<HomeProps,{}> {
    render() {
        return (
            <div className="h-screen flex">
                <div className="w-64 px-8 py-4 bg-gray-100 border-r">
                    <nav className="mt-8">
                        <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Set-up</h2>
                        <div className="mt-2 -mx-3">
                            <SidebarLink href="#" active={true}>Event details</SidebarLink>
                            <SidebarLink href="#" active={false}>Tickets & pricing</SidebarLink>
                        </div>
                    </nav>
                </div>
                <div className="flex-1 min-w-0 bg-white">
                    <div className="border-b-2 border-gray-200"></div>
                    <div className="overflow-auto"></div>
                </div>
            </div>
        )
    }
}