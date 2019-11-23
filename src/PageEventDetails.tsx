import * as React from 'react'
import "./tailwind.css"
import "./TivokAPIClient"
import { TivokEvent } from './TivokAPIClient'

export interface PageEventDetailsProps {
    event: TivokEvent
}

export class PageEventDetails extends React.Component<PageEventDetailsProps,{}> {
    render() {
        return (
            <React.Fragment>
                test
            </React.Fragment>
        )
    }
}