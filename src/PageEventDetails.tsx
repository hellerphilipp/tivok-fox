import * as React from 'react'
import "./tailwind.css"
import "./TivokAPIClient"
import { TivokEvent } from './TivokAPIClient'
import { Formik } from 'formik'

export interface PageEventDetailsProps {
    event: TivokEvent
}

export class PageEventDetails extends React.Component<PageEventDetailsProps,{}> {
    render() {
        return (
            <React.Fragment>
                <Formik
                    initialValues={{ 
                        name: this.props.event.name, 
                        startDate: this.props.event.startDate!=null?this.props.event.startDate.toISOString():'',
                        endDate: this.props.event.endDate!=null?this.props.event.endDate.toISOString():'',
                        location: this.props.event.location,
                        description: this.props.event.description,
                        published: this.props.event.published?'true':'false',
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form className="w-1/2" onSubmit={handleSubmit}>
                            <div>
                                <div className="w-full">
                                    <label>
                                        Event name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        value={values.name}
                                    />
                                </div>
                            </div>  
                            <div>
                                <div className="w-1/2">
                                    <label>
                                        Event starts
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="startDate"
                                        onChange={handleChange}
                                        value={values.startDate}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label>
                                        Event ends
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="endDate"
                                        onChange={handleChange}
                                        value={values.endDate}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <label>
                                        Event location
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        onChange={handleChange}
                                        value={values.location}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="w-full">
                                    <label>
                                        Event description
                                    </label>
                                    <textarea
                                        name="description"
                                        onChange={handleChange}
                                        value={values.description}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>
                                        Publish
                                    </label>
                                    <input
                                        type="checkbox"
                                        name="published"
                                        onChange={handleChange}
                                        value={values.published}
                                    />
                                </div>
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </React.Fragment>
        )
    }
}