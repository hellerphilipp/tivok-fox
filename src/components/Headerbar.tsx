import * as React from 'react'

import "../tailwind.css"
import { Eventchooser } from './Eventchooser'
import { AccountMenu } from './AccountMenu'

interface HeaderbarProps {
    page: string;
}

export class Headerbar extends React.Component<HeaderbarProps, {}> {
    getHeading() {
        switch(this.props.page) {
            case "eventDetails":
                return "Event details"
                break;
            case "tickets":
                return "Tickets and Pricing"
                break;
            case "orders":
                return "Orders"
                break;
            case "guests":
                return "Guest List"
                break;
            default:
                return this.props.page
        }
    }

    render() {
        return (
            <div className="border-b-2 border-gray-200">
                <header className="px-6">
                    <div className="flex justify-between items-center border-b border-gray-200 py-2">
                        <div>
                            <Eventchooser />
                        </div>
                        <div>
                            <AccountMenu />
                        </div>
                    </div>
                    <div className="py-3">
                        <span className="flex items-center text-lg text-gray-900">
                            <h2>{this.getHeading()}</h2>
                        </span>
                    </div>
                </header>
            </div>
        );
    }
}