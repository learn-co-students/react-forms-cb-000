// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" value={this.state.value} onChange={this.handleChange}/>
        <input type="text" name="lastName" value={this.state.value} onChange={this.handleChange}/>
      </form>
    );
  }
}

export default ControlledInput;
