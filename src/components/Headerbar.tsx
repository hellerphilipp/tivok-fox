import * as React from 'react'
import { Dropdown, DropdownItem } from './Dropdown'

import "../tailwind.css"
import { Eventchooser } from './Eventchooser'

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
                            <div className="relative">
                                <button>
                                    <img 
                                        className="h-10 w-10 rounded-full object-cover mt-1"
                                        src="https://lh3.googleusercontent.com/a-/AAuE7mCI1Exy9CMUU99TrafAKVVRLFJnQbf_UIQMc9dX" 
                                    />
                                </button>
                                <Dropdown right={true}>
                                    <DropdownItem text="Sign out" href="#"></DropdownItem>
                                </Dropdown>
                            </div>
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