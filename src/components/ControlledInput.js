// Code ControlledInput Component Here

import React, { Controller } from 'react';

class ControlledInput extends Controller {
  state = {
    firstName: "John",
    lastName: "Henry"
  }



  render() {
    return(
      <form>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    );
  }
}

export default ControlledInput;
