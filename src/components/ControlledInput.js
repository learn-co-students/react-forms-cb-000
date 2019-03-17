import React from 'react';

class ControlledInput extends React.Component {
  state = {
    firstName: '',
    lastName: '',
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    
    this.sendFormDataSomewhere(this.state);
  }
  
  sendFormDataSomewhere = data => {
    console.log(data);
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} /><br />
        <label>Last Name</label><input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} /><br />
        <input type="submit" />
      </form>
    )
  }}

export default ControlledInput;