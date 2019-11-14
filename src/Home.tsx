import * as React from 'react'
import { Auth } from './Auth'
import { Sidebar } from './components/Sidebar'
import "./tailwind.css"

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
                        <header className="flex justify-between items-center px-6 py-3">
                            <span className="flex items-center">
                                <h1 className="text-lg">Event details</h1>
                            </span>
                            <button>
                                <img 
                                    className="h-10 w-10 rounded-full object-cover"
                                    src="https://lh3.googleusercontent.com/a-/AAuE7mCI1Exy9CMUU99TrafAKVVRLFJnQbf_UIQMc9dX" 
                                />
                            </button>
                        </header>
                    </div>
                    <div className="overflow-auto"></div>
                </div>
            </div>
        )
    }
}