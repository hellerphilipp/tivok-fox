import * as React from 'react'

import { Dropdown, DropdownItem } from './Dropdown'

import "../tailwind.css"
import { TivokAPIClient, TivokEvent } from '../TivokAPIClient';
import { AppState } from '../Home';

export interface EventChooserProps {
    setAppState: ((arg0: AppState) => void)
    selected?: TivokEvent
}

export interface EventchooserState {
    menuShown: boolean
    menuItems: TivokEvent[]
}

export class Eventchooser extends React.Component<EventChooserProps, EventchooserState> {
    constructor(props: EventChooserProps) {
        super(props)

        this.toggleMenu = this.toggleMenu.bind(this);
        this.loadDropdownItems = this.loadDropdownItems.bind(this);
        this.newEvent = this.newEvent.bind(this);
        this.chooseEvent = this.chooseEvent.bind(this);
    }
    
    componentWillMount() {
        this.setState({
            menuShown: false,
            menuItems: [],
        })
    }

    toggleMenu() {
        if(!this.state.menuShown) {
            this.loadDropdownItems()
        }

        this.setState(prevState => ({
            menuShown: !prevState.menuShown
        }));
    }

    loadDropdownItems() {
        TivokAPIClient.getExistingEvents().then(
            (res: [TivokEvent]) => {
                this.setState({
                    menuItems: res
                });
            }
        )
    }

    chooseEvent(event: TivokEvent) {
        TivokAPIClient.updateUser({
            lastEvent: event.id
        }).then(_ => {
            this.props.setAppState({
                activeEvent: event
            })
        })
    }

    newEvent() {
        let name = prompt("Name of the new event (can be changed later):")

        TivokAPIClient.createEvent(name).then(eventId =>{
            TivokAPIClient.getEvent(eventId).then(event => {
                this.chooseEvent(event)
                // this.toggleMenu() // FIXME: why doesn't this work
            })
        })
    }

    render() {
        return (
            <div className="relative">
                <button onClick={this.toggleMenu} className="px-2 py-1 -ml-2 rounded-lg text-gray-900 hover:bg-gray-100 cursor-pointer text-2xl focus:outline-none">
                    {this.props.selected!=null?this.props.selected.name:"No Event"}
                </button>
                {this.state.menuShown && (
                    <Dropdown>
                        {this.state.menuItems.map((item) => 
                            <DropdownItem onClick={() => {this.chooseEvent(item)}} text={item.name} href="#"></DropdownItem>
                        )}
                        <DropdownItem isBlue onClick={this.newEvent} text="New Event" href="#"></DropdownItem>
                    </Dropdown>
                )}
            </div>
        );
    }
}