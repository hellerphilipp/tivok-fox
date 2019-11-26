import * as React from 'react'
import "../../tailwind.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

interface SidebarLinkProps {
    href: string
    active: boolean
}

export class SidebarLink extends React.Component<SidebarLinkProps, {}> {
    render() {
        let classes = "flex items-center px-3 py-2 text-sm font-medium rounded-lg"

        if(this.props.active) {
            classes = classes + " text-gray-900 bg-gray-200"
        } else if(!this.props.active) {
            classes = classes + " text-gray-700 hover:text-gray-900 hover:bg-gray-200"
        }

        return (
            <Link to={this.props.href} className={classes}>
                {this.props.children}
            </Link>
        );
    }
}