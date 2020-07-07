import * as React from 'react';
import TextField from './TextField';
import RadioField from './RadioField';

const Form = () => {
  return(
    <form>
      <TextField id="movingDate" label="Date of moving" />
      <TextField id="postcode" label="Postcode in Hamburg" />
      <TextField id="landlord" label="Name and address of the landlord" />
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

      <input className="btn btn-danger" type="submit"></input>
    </form>

  )
}

// type State = {
//   movingDate: string,
//   postcode: 'postcode' | number
// }

// type Props = {
//   value?: string
// }

// class Form extends React.Component<{}, State> {
//   // constructor(props: Props) {
//   //   super(props);

//   //   this.state = {
//   //     movingDate: '',
//   //     postcode: 'postcode'
//   //   }
//   // }

//   state: State = {
//     movingDate: '',
//     postcode: 'postcode'
//   }

//   handleSubmit = () => {
//     // print results to console as JSON
//   }

  // handleChange = (event) => {
  //   this.setState({
  //     movingDate: event.target.movingDate,
  //     postcode: event.target.postcode
  //   });
  // }

//   render() {
//     return (
//       <form className="form-group" onSubmit={this.handleSubmit} >
//         <label htmlFor="m-date">Date of moving</label>
//         <input className="form-control" type="text" id="m-date" name="m-date" value={this.state.movingDate} onChange={this.handleChange} ></input>

//         <label htmlFor="m-date">into the apartment in</label>
//         <input className="form-control" type="text" id="m-date" name="m-date" onChange={this.handleChange} placeholder="postcode"></input>

//         <label htmlFor="m-date">Name and address of the landlord</label>
//         <input className="form-control" type="text" id="m-date" name="m-date"></input>

//         <label htmlFor="m-date">Surname / Doctoral degree</label>
//         <input className="form-control" type="text" id="m-date" name="m-date"></input>

//         <label htmlFor="m-date">Birthname (if applicable)</label>
//         <input className="form-control" type="text" id="m-date" name="m-date"></input>

//         <input className="btn btn-danger" type="submit"></input>
//       </form>
//     )
//   }
// }

export default Form;
