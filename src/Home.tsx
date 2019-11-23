import * as React from 'react'
import { Auth } from './Auth'
import { Sidebar } from './components/Sidebar'
import "./tailwind.css"
import { Headerbar } from './components/Headerbar'
import { TivokAPIClient, TivokEvent } from './TivokAPIClient'

interface HomeProps {
    auth: Auth,
    page: string
}

export interface AppState {
    activeEvent?: TivokEvent
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

    render() {
        return (
            <div className="h-screen flex">
                <Sidebar page={this.props.page}/>
                <div className="flex-1 min-w-0 bg-white">
                    <Headerbar setAppState={this.setState} selectedEvent={this.state.activeEvent} page={this.props.page}/>
                    <div className="overflow-auto"></div>
                </div>
            </div>
        )
    }
}