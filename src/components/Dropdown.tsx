import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import "../tailwind.css"

export interface DropdownProps {
    right: boolean;
}

export interface DropdownItemProps {
    text: string,
    href: string
}

export class Dropdown extends React.Component<DropdownProps, {}> {
    render() {
        let classes = "absolute right-0 mt-1 w-32 rounded-lg py-1 bg-white shadow"

        if(this.props.right) {
            classes = classes + " right-0"
        } else if(!this.props.right) {
            classes = classes + " left-0"
        }

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}

export class DropdownItem extends React.Component<DropdownItemProps, {}> {
    render() {
        return (
            <Link className="block px-4 py-1 text-gray-800 hover:bg-blue-500 hover:text-white" to={this.props.href}>{this.props.text}</Link>
        );
    }
}