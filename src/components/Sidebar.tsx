import * as React from 'react'
import { SidebarLink } from './sidebar/SidebarLink'
import { SidebarHeading } from './sidebar/SidebarHeading'

import "../tailwind.css"

export class Sidebar extends React.Component<{}, {}> {
    render() {
        return (
            <div className="w-64 px-8 py-4 bg-gray-100 border-r">
                <nav className="mt-8">
                    <SidebarHeading>Set-up</SidebarHeading>
                    <div className="mt-2 -mx-3 mb-6">
                        <SidebarLink href="#" active={true}>Event details</SidebarLink>
                        <SidebarLink href="#" active={false}>Tickets & pricing</SidebarLink>
                    </div>
                    <SidebarHeading>Manage</SidebarHeading>
                    <div className="mt-2 -mx-3">
                        <SidebarLink href="#" active={false}>Orders</SidebarLink>
                        <SidebarLink href="#" active={false}>Guest list</SidebarLink>
                    </div>
                </nav>
            </div>
        );
    }
}