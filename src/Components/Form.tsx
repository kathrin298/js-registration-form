import * as React from 'react';
import TextField from './TextField';
import RadioField from './RadioField';

type State = {
  movingDate: string,
  postcode: string,
  landlord: string,
  surname: string,
  birthname: string,
  firstnames: string,
  dob: string,
  placeOfBirth: string,
  currentNationalities: string,
  gender: string,
  relationshipStatus: string,
  religion: string,
  address: string,
  documentType: string,
  documentAuthory: string,
  documentIssueDate: string,
  documentExpiryDate: string,
  documentSerialNumber: string,
  previousAccomodationPostcode: string,
  previousAccomodationAddress: string,
  signatureCity: string,
  signatureDate: string,
  [x: string]: string
}

class Form extends React.Component<{}, State> {
  state: State = {
    movingDate: "",
    postcode: "",
    address: "",
    landlord: "",
    surname: "",
    birthname: "",
    firstnames: "",
    dob: "",
    placeOfBirth: "",
    currentNationalities: "",
    gender: "",
    relationshipStatus: "",
    religion: "",
    documentType: "",
    documentAuthory: "",
    documentIssueDate: "",
    documentExpiryDate: "",
    documentSerialNumber: "",
    previousAccomodationPostcode: "",
    previousAccomodationAddress: "",
    signatureCity: "",
    signatureDate: ""
  }

  handleTextFieldChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleRadioFieldChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <TextField id="movingDate" label="Date of moving" value={this.state.movingDate} onChange={this.handleTextFieldChange} />
        <TextField id="postcode" label="Postcode in Hamburg" value={this.state.postcode} onChange={this.handleTextFieldChange} />
        <TextField id="address" label="Street, house number, add-on (e.g. name of maintenant), floor, apartment number" value={this.state.address} onChange={this.handleTextFieldChange} />
        <TextField id="landlord" label="Name and address of the landlord" value={this.state.landlord} onChange={this.handleTextFieldChange} />
        <TextField id="surname" label="Surname / Doctoral degree" value={this.state.surname} onChange={this.handleTextFieldChange} />
        <TextField id="birthname" label="Birth name (if applicable)" value={this.state.birthname} onChange={this.handleTextFieldChange} />
        <TextField id="firstnames" label="First name(s)" value={this.state.firstnames} onChange={this.handleTextFieldChange} />

        <RadioField id="male" label="male" name="gender" value="male" onChange={this.handleRadioFieldChange} />
        <RadioField id="female" label="female" name="gender" value="female" onChange={this.handleRadioFieldChange} />

        <TextField id="dob" label="Date of birth" value={this.state.dob} onChange={this.handleTextFieldChange} />
        <TextField id="placeOfBirth" label="Place of birth (city and country)" value={this.state.placeOfBirth} onChange={this.handleTextFieldChange} />

        <RadioField id="single" label="single" name="relationshipStatus" value="single" onChange={this.handleRadioFieldChange} />
        <RadioField id="annulledCivilPartnership" label="annulled civil partnership" name="relationshipStatus" value="annulled civil partnership" onChange={this.handleRadioFieldChange} />
        <RadioField id="civilPartnership" label="civil partnership" name="relationshipStatus" value="civil partnership" onChange={this.handleRadioFieldChange} />
        <RadioField id="married" label="married" name="relationshipStatus" value="married" onChange={this.handleRadioFieldChange} />
        <RadioField id="divorced" label="divorced" name="relationshipStatus" value="divorced" onChange={this.handleRadioFieldChange} />
        <RadioField id="widowed" label="widowed" name="relationshipStatus" value="widowed" onChange={this.handleRadioFieldChange} />
        <RadioField id="widowedCiviledPartner" label="widowed civiled partner" name="relationshipStatus" value="widowed civiled partner" onChange={this.handleRadioFieldChange} />

        <RadioField id="lutheran" label="Lutheran" name="religion" value="lutheran" onChange={this.handleRadioFieldChange} />
        <RadioField id="jewishComHamb" label="Jewish Com. Hamb." name="religion" value="jewish com. hamb." onChange={this.handleRadioFieldChange} />
        <RadioField id="romanCatholic" label="Roman Catholic" name="religion" value="roman catholic" onChange={this.handleRadioFieldChange} />
        <RadioField id="reformedChurches" label="Reformed Churches" name="religion" value="reformed churches" onChange={this.handleRadioFieldChange} />
        <RadioField id="other" label="Other religious communities/no statement/none" name="religion" value="other" onChange={this.handleRadioFieldChange} />

        <TextField id="currentNationalities" label="Current Nationalities" value={this.state.currentNationalities} onChange={this.handleTextFieldChange} />

        <RadioField id="idCard" label="ID Card" name="documentType" value="id card" onChange={this.handleRadioFieldChange} />
        <RadioField id="passport" label="Passport" name="documentType" value="passport" onChange={this.handleRadioFieldChange} />
        <TextField id="documentAuthory" label="Issuing authority" value={this.state.documentAuthory} onChange={this.handleTextFieldChange} />
        <TextField id="documentIssueDate" label="Date of issue" value={this.state.documentIssueDate} onChange={this.handleTextFieldChange} />
        <TextField id="documentExpiryDate" label="Expiry date" value={this.state.documentExpiryDate} onChange={this.handleTextFieldChange} />
        <TextField id="documentSerialNumber" label="Serial number" value={this.state.documentSerialNumber} onChange={this.handleTextFieldChange} />

        <TextField id="previousAccomodationPostcode" label="Postcode of previous accomodation" value={this.state.previousAccomodationPostcode} onChange={this.handleTextFieldChange} />
        <TextField id="previousAccomodationAddress" label="Municipality/ street/ house number and add-on" value={this.state.previousAccomodationAddress} onChange={this.handleTextFieldChange} />

        <TextField id="signatureDate" label="Date" value={this.state.signatureDate} onChange={this.handleTextFieldChange} />
        <TextField id="signatureCity" label="City" value={this.state.signatureCity} onChange={this.handleTextFieldChange} />

        <div className="signature-field" ></div>
        <input className="btn btn-danger" type="submit" ></input>
      </form>
    )
  }
}

export default Form;
