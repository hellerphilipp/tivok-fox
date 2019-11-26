import * as React from 'react'
import { Auth } from './Auth'
import { Sidebar } from './components/Sidebar'
import "./tailwind.css"
import { Headerbar } from './components/Headerbar'
import { TivokAPIClient, TivokEvent } from './TivokAPIClient'
import { PageEventDetails } from './PageEventDetails'

interface HomeProps {
    auth: Auth,
    page: string
}

export interface AppState {
    activeEvent?: TivokEvent
    alertText?: string
}

export class Home extends React.Component<HomeProps,AppState> {
    constructor(props: HomeProps) {
        super(props)
    
        this.setState = this.setState.bind(this)
      }

    componentWillMount() {
        this.setState({
            activeEvent: null
        })

        // fetch and choose last selected event
        TivokAPIClient.getOwnUser().then(user => {
            if(user.lastEvent != null) {
                TivokAPIClient.getEvent(user.lastEvent).then(event => {
                    this.setState({
                        activeEvent: event
                    })
                })
            }
        })
    }

    getMainComponent() {
        if(this.state.activeEvent != null) {
            switch(this.props.page) {
                case "eventDetails":
                    return <PageEventDetails setAppState={this.setState} event={this.state.activeEvent}/>
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
                    return <React.Fragment />
            }
        }
    }

    render() {
        return (
            <div className="h-screen flex">
                <Sidebar page={this.props.page}/>
                <div className="flex-1 min-w-0 bg-white">
                    <Headerbar setAppState={this.setState} selectedEvent={this.state.activeEvent} page={this.props.page}/>
                    <div className="h-full relative">
                        {this.state.alertText != null && (
                            <div className="absolute flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 w-full">
                                <p>{this.state.alertText}</p>
                            </div>
                        )}
                        <main className="p-3 bg-gray-200 h-full">
                            <div className="bg-white rounded-lg p-3">
                                {this.getMainComponent()}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}