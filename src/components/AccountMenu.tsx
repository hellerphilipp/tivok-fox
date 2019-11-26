import * as React from 'react'
import { Dropdown, DropdownItem } from './Dropdown'

import "../tailwind.css"

interface AccountMenuState {
    menuShown: boolean
}

export class AccountMenu extends React.Component<{}, AccountMenuState> {
    constructor(props: {}) {
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

    render() {
        return (
            <div className="relative">
                <button onClick={this.toggleMenu} className="focus:outline-none">
                    <img 
                        className="h-10 w-10 rounded-full object-cover mt-1"
                        src="https://lh3.googleusercontent.com/a-/AAuE7mCI1Exy9CMUU99TrafAKVVRLFJnQbf_UIQMc9dX" 
                    />
                </button>

                {this.state.menuShown && (
                    <Dropdown right>
                        <DropdownItem text="Sign out" href="/logout"></DropdownItem>
                    </Dropdown>
                )}
                
            </div>
        );
    }
}