import * as React from 'react'
import { Auth } from './Auth'
import { Sidebar } from './components/Sidebar'
import "./tailwind.css"
import { Dropdown, DropdownItem } from './components/Dropdown'

interface HomeProps {
    auth: Auth,
}

export class Home extends React.Component<HomeProps,{}> {
    render() {
        return (
            <div className="h-screen flex">
                <Sidebar />
                <div className="flex-1 min-w-0 bg-white">
                    <div className="border-b-2 border-gray-200">
                        <header className="px-6">
                            <div className="flex justify-between items-center border-b border-gray-200 py-2">
                                <div>
                                    <div className="relative px-2 py-1 -ml-2 rounded-lg text-gray-900 hover:bg-gray-100 cursor-pointer text-2xl">
                                        <h1>Silvester</h1>
                                        <span className="absolute inset-y-0 right-0 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600">
                                                <path 
                                                    stroke="#000"
                                                    fill="#000"
                                                    d="M270.3 58.65L153 175.95 35.7 58.65 0 94.35l153 153 153-153z"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <button>
                                            <img 
                                                className="h-10 w-10 rounded-full object-cover mt-1"
                                                src="https://lh3.googleusercontent.com/a-/AAuE7mCI1Exy9CMUU99TrafAKVVRLFJnQbf_UIQMc9dX" 
                                            />
                                        </button>
                                        <Dropdown>
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
                    <div className="overflow-auto"></div>
                </div>
            </div>
        )
    }
}