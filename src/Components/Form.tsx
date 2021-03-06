import * as React from 'react';
import TextField from './TextField';
import RadioField from './RadioField';

type Props = {
  genderOptions: string[],
  relationshipStatusOptions: string[],
  religionOptions: string[],
  documentTypeOptions: string[]
}

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

class Form extends React.Component<Props, State> {
  static defaultProps: Props = {
    genderOptions: ['Male', 'Female'],
    relationshipStatusOptions: ["Single",
                                "Annulled civil partnership",
                                "Civil partnership",
                                "Married",
                                "Divorced",
                                "Widowed",
                                "Widowed civiled partner"],
    religionOptions: ["Lutheran",
                      "Jewish Com. Hamb.",
                      "Roman Catholic",
                      "Reformed churches",
                      "Other"],
    documentTypeOptions: ['ID Card', 'Passport']
  }

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
    gender: "Male",
    relationshipStatus: "Single",
    religion: "Lutheran",
    documentType: "ID Card",
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
    console.log(JSON.stringify(this.state,null,2))
  }

  render() {
    const { genderOptions, relationshipStatusOptions, religionOptions, documentTypeOptions } = this.props;
    const { movingDate, postcode, address, landlord, surname, birthname, firstnames, dob, placeOfBirth, currentNationalities, documentAuthory, documentIssueDate, documentExpiryDate, documentSerialNumber, previousAccomodationPostcode, previousAccomodationAddress, signatureCity, signatureDate } = this.state;

    return(
      <form onSubmit={this.handleSubmit} >
        <div className="form-section">
          <TextField id="movingDate" label="Date of moving" value={movingDate} onChange={this.handleTextFieldChange} />
          <TextField id="postcode" label="Postcode in Hamburg" value={postcode} onChange={this.handleTextFieldChange} />
          <TextField id="address" label="Street, house number, add-on (e.g. name of maintenant), floor, apartment number" value={address} onChange={this.handleTextFieldChange} />
        </div>

        <div className="form-section">
          <TextField id="landlord" label="Name and address of the landlord" value={landlord} onChange={this.handleTextFieldChange} />
        </div>

        <div className="form-section">
          <TextField id="surname" label="Surname / Doctoral degree" value={surname} onChange={this.handleTextFieldChange} />
          <TextField id="birthname" label="Birth name (if applicable)" value={birthname} optional={true} onChange={this.handleTextFieldChange} />
          <TextField id="firstnames" label="First name(s)" value={firstnames} onChange={this.handleTextFieldChange} />
          <RadioField id="gender" name="gender" options={genderOptions} label="Gender" onChange={this.handleRadioFieldChange} />
          <TextField id="dob" label="Date of birth" value={dob} onChange={this.handleTextFieldChange} />
          <TextField id="placeOfBirth" label="Place of birth (city and country)" value={placeOfBirth} onChange={this.handleTextFieldChange} />
          <RadioField id="relationshipStatus" name="relationshipStatus" options={relationshipStatusOptions} label="Relationship status" onChange={this.handleRadioFieldChange} />
          <RadioField id="religion" name="religion" options={religionOptions} label="Religion" onChange={this.handleRadioFieldChange} />
          <TextField id="currentNationalities" label="Current nationalities" value={currentNationalities} onChange={this.handleTextFieldChange} />
          <RadioField id="documentType" name="documentType" options={documentTypeOptions} label="Type of document" onChange={this.handleRadioFieldChange} />
          <TextField id="documentAuthory" label="Issuing authority" value={documentAuthory} onChange={this.handleTextFieldChange} />
          <TextField id="documentIssueDate" label="Date of issue" value={documentIssueDate} onChange={this.handleTextFieldChange} />
          <TextField id="documentExpiryDate" label="Expiry date" value={documentExpiryDate} onChange={this.handleTextFieldChange} />
          <TextField id="documentSerialNumber" label="Serial number" value={documentSerialNumber} onChange={this.handleTextFieldChange} />
        </div>

        <div className="form-section">
          <TextField id="previousAccomodationPostcode" label="Postcode of previous accomodation" value={previousAccomodationPostcode} onChange={this.handleTextFieldChange} />
          <TextField id="previousAccomodationAddress" label="Municipality/ street/ house number and add-on" value={previousAccomodationAddress} onChange={this.handleTextFieldChange} />
        </div>

        <h3>Registrant's Signature</h3>
        <TextField id="signatureDate" label="Date" value={signatureDate} onChange={this.handleTextFieldChange} />
        <TextField id="signatureCity" label="City" value={signatureCity} onChange={this.handleTextFieldChange} />
        <div className="signature-field" >Signature</div>

        <input className="btn btn-lg btn-block btn-danger" type="submit" ></input>
      </form>
    )
  }
}

export default Form;
