import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import "../tailwind.css"

export interface DropdownProps {
    right?: boolean;
}

export interface DropdownItemProps {
    text: string,
    href: string,
    onClick?: () => void,
    isBlue?: boolean
}

export class Dropdown extends React.Component<DropdownProps, {}> {
    render() {
        let classes = "absolute right-0 mt-1 w-32 rounded-lg py-1 bg-white shadow z-50"

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
        let classes = "block px-4 py-1 hover:bg-blue-500 hover:text-white"

        if(this.props.isBlue) {
            classes += " text-blue-500"
        } else {
            classes += " text-gray-800"
        }

        return (
            <Link onClick={this.props.onClick} className={classes} to={this.props.href}>{this.props.text}</Link>
        );
    }
}