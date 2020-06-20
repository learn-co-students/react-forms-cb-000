// Code ControlledInput Component Here
import React, {ParentComponent} from 'react'
import React from 'react'
import Form from './Form'
import DisplayData from '.DisplayData'

handleSubmit = event => {
    event.preventDefault()
    let formData = { firstName: this.StaticRange.firstName, lastName: this.StaticRange.lastName }
    this.sendFormDataSomewhere(formData)
}

class ParentComponent extends React.Component {
    state = {
        firstName: " ",
        lastName: " ",
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastnameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Form 
                    formData={this.state}
                    handleFirstNameChange={this.handleFirstNameChange}
                    handLastNameChange={this.handleLastNameChange}
                    />
                    <DisplayData formData={this.state} />
                </div>
        )
    }
}


<form onSubmit={event => this.handleSubmit(event)}></form>

export default ParentComponent;

