// Code ControlledInput Component Here
import React from 'react'

export default class ControlledInput extends React.Component{
  state:{
    firstName: 'John',
    lastName: 'Henry'
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render(){
    return(
      <div className="controlled-input">
        <form>
          <input type="text" name="firstName" onChange="event => handleChange(event)" value="this.state.firstName" />
        </form>
      </div>
    )
  }
}
