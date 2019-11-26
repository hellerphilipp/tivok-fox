import * as React from 'react'
import { SidebarLink } from './sidebar/SidebarLink'
import { SidebarHeading } from './sidebar/SidebarHeading'

import "../tailwind.css"

interface SidebarProps {
    page: string
}

export class Sidebar extends React.Component<SidebarProps, {}> {
    render() {
        return (
            <div className="w-64 px-8 py-4 bg-white border-r">
                <img className="mt-4 h-6" src="/img/tivok-logo.png" />
                <nav className="mt-10">
                    <SidebarHeading>Set-up</SidebarHeading>
                    <div className="mt-2 -mx-3 mb-8">
                        <SidebarLink href="/" active={this.props.page=="eventDetails"}>Event details</SidebarLink>
                        <SidebarLink href="/tickets" active={this.props.page=="tickets"}>Tickets & pricing</SidebarLink>
                    </div>
                    <SidebarHeading>Manage</SidebarHeading>
                    <div className="mt-2 -mx-3">
                        <SidebarLink href="/orders" active={this.props.page=="orders"}>Orders</SidebarLink>
                        <SidebarLink href="/guests" active={this.props.page=="guests"}>Guest list</SidebarLink>
                    </div>
                </nav>
            </div>
        );
    }
}