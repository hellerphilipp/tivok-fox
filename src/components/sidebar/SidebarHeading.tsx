import * as React from 'react'
import "../../tailwind.css"

export class SidebarHeading extends React.Component<{}, {}> {
    render() {
        return (
            <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                {this.props.children}
            </h2>
        );
    }
}