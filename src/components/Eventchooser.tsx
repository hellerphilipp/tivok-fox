import * as React from 'react'

import { Dropdown, DropdownItem } from './Dropdown'

import "../tailwind.css"
import { func } from 'prop-types';

export interface EventchooserProps {
    selected: string
}

export interface EventchooserState {
    menuShown: boolean
}

export class Eventchooser extends React.Component<EventchooserProps, EventchooserState> {
    constructor(props: EventchooserProps) {
        super(props)

        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    componentWillMount() {
        this.setState({
            menuShown: false
        });
    }

    toggleMenu() {
        this.setState(prevState => ({
            menuShown: !prevState.menuShown
        }));
    }

    newEvent() {
        let name = prompt("Name of the new event (can be changed later):")
        console.log(name)
        this.toggleMenu() // why doesn't this work
    }

    render() {
        return (
            <div className="relative">
                <button onClick={this.toggleMenu} className="px-2 py-1 -ml-2 rounded-lg text-gray-900 hover:bg-gray-100 cursor-pointer text-2xl focus:outline-none">
                    {this.props.selected}
                </button>
                {this.state.menuShown && (
                    <Dropdown right={true}>
                        <DropdownItem isBlue onClick={this.newEvent} text="New Event" href="#"></DropdownItem>
                    </Dropdown>
                )}
            </div>
        );
    }
}