import * as React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movingDate: '',
      postcode: 'postcode'
    }
  }

  handleSubmit = () => {
    // print results to console as JSON
  }

  handleChange = (event) => {
    this.setState({
      movingDate: event.target.movingDate,
      postcode: event.target.postcode
    });
  }

  render() {
    return (
      <form className="form-group" onSubmit={this.handleSubmit} >
        <label htmlFor="m-date">Date of moving</label>
        <input className="form-control" type="text" id="m-date" name="m-date" value={this.state.movingDate} onChange={this.handleChange} ></input>

        <label htmlFor="m-date">into the apartment in</label>
        <input className="form-control" type="text" id="m-date" name="m-date" onChange={this.handleChange} placeholder="postcode"></input>

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
