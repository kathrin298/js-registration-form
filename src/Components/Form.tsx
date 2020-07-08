import * as React from 'react';
import TextField from './TextField';
import RadioField from './RadioField';

type State = {
  movingDate: string,
  postcode: string,
  landlord: string,
  [x: string]: string
}

class Form extends React.Component<{}, State> {
  state: State = {
    movingDate: "",
    postcode: "",
    landlord: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <TextField id="movingDate" label="Date of moving" value={this.state.movingDate} onChange={this.handleChange} />
        <TextField id="postcode" label="Postcode in Hamburg" value={this.state.postcode} onChange={this.handleChange} />
        <TextField id="landlord" label="Name and address of the landlord" value={this.state.landlord} onChange={this.handleChange} />
        <TextField id="surname" label="Surname / Doctoral degree" />
        <TextField id="birthname" label="Birth name (if applicable)" />
        <TextField id="firstnames" label="First name(s)" />

        <RadioField id="male" label="male" name="gender" value="male" />
        <RadioField id="female" label="female" name="gender" value="female" />

        <TextField id="dob" label="Date of birth" />
        <TextField id="placeOfBirth" label="Place of birth (city and country)" />

        <RadioField id="single" label="single" name="relationshipStatus" value="single" />
        <RadioField id="annulledCivilPartnership" label="annulled civil partnership" name="relationshipStatus" value="annulledCivilPartnership" />
        <RadioField id="civilPartnership" label="civil partnership" name="relationshipStatus" value="civilPartnership" />
        <RadioField id="married" label="married" name="relationshipStatus" value="married" />
        <RadioField id="divorced" label="divorced" name="relationshipStatus" value="divorced" />
        <RadioField id="widowed" label="widowed" name="relationshipStatus" value="widowed" />
        <RadioField id="widowedCiviledPartner" label="widowed civiled partner" name="relationshipStatus" value="widowedCiviledPartner" />

        <RadioField id="lutheran" label="Lutheran" name="relationshipStatus" value="lutheran" />
        <RadioField id="jewishComHamb" label="Jewish Com. Hamb." name="relationshipStatus" value="jewishComHamb" />
        <RadioField id="romanCatholic" label="Roman Catholic" name="relationshipStatus" value="romanCatholic" />
        <RadioField id="reformedChurches" label="Reformed Churches" name="relationshipStatus" value="reformedChurches" />
        <RadioField id="other" label="Other religious communities/no statement/none" name="relationshipStatus" value="other" />

        <TextField id="currentNationalities" label="Current Nationalities" />

        <input className="btn btn-danger" type="submit" ></input>
      </form>
    )
  }
}

export default Form;
