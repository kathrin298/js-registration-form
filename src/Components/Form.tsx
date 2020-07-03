import React, { Component } from 'react';

class Form extends Component {
  handleSubmit = () => {
    // print results to console as JSON
  }

  render() {
    return (
      <form className="form-group" onSubmit={this.handleSubmit} >
        <label htmlFor="m-date">Date of moving</label>
        <input className="form-control" type="text" id="m-date" name="m-date"></input>

        <label htmlFor="m-date">into the apartment in</label>
        <input className="form-control" type="text" id="m-date" name="m-date" placeholder="postcode"></input>

        <label htmlFor="m-date">Name and address of the landlord</label>
        <input className="form-control" type="text" id="m-date" name="m-date"></input>

        <label htmlFor="m-date">Surname / Doctoral degree</label>
        <input className="form-control" type="text" id="m-date" name="m-date"></input>

        <label htmlFor="m-date">Birthname (if applicable)</label>
        <input className="form-control" type="text" id="m-date" name="m-date"></input>

        <input className="btn btn-danger" type="submit"></input>
      </form>
    )
  }
}

export default Form;
