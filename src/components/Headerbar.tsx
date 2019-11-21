import * as React from 'react'

import "../tailwind.css"
import { Eventchooser } from './Eventchooser'
import { AccountMenu } from './AccountMenu'

export class Headerbar extends React.Component<{}, {}> {
    render() {
        return (
            <div className="border-b-2 border-gray-200">
                <header className="px-6">
                    <div className="flex justify-between items-center border-b border-gray-200 py-2">
                        <div>
                            <Eventchooser selected="Silvester 2k18"/>
                        </div>
                        <div>
                            <AccountMenu />
                        </div>
                    </div>
                    <div className="py-3">
                        <span className="flex items-center text-lg text-gray-900">
                            <h2>Event details</h2>
                        </span>
                    </div>
                </header>
            </div>
        );
    }
}