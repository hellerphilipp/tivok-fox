import * as React from 'react'

import "../tailwind.css"

export interface EventchooserProps {
    selected: string
}

export class Eventchooser extends React.Component<EventchooserProps, {}> {
    render() {
        return (
            <div className="relative px-2 py-1 -ml-2 rounded-lg text-gray-900 hover:bg-gray-100 cursor-pointer text-2xl">
                <h1>{this.props.selected}</h1>
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
        );
    }
}