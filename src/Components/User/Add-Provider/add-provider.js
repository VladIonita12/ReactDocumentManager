import React, { Component, useState } from 'react';
import App from '../../../App';
import GoogleLogin from 'react-google-login';
import Alert from 'react-bootstrap/Alert'
import './add-provider.css';
import logo from '../Contract-Component/Asset.svg'
import UserContractsStore from '../../../Stores/User/UserContractsStore';
import UserProviderStore from '../../../Stores/User/UserProviderStore';
const SERVER = 'http://3.21.21.92:8080'



class AddProvider extends Component {
  constructor(props) {
    super(props);


    this.state = {
      isOk: false,

      providerName: '',
      providerCountry: '',
      providerZIP: '',
      providerCIF: '',
      providerCI: '',
      providerEmail: '',
      providerNumber: '',
      providerCNP: '',
      providerLocation: '',
      providerStreetName: '',
      providerStreetNumber: '',
      providerSector: '',
      providerIBAN: '',
      providerBank: '',
      providerRepresentative: '',
      providerRepresentativeFunction: ''
    }
    this.store = new UserProviderStore();



    this.saveInfo = () => {


      if (this.state.providerName === '' || this.state.providerCountry === '' || this.state.providerZIP === '' || this.state.providerCIF === '' || this.state.providerCI === '' ||
        this.state.providerEmail === '' || this.state.providerNumber === '' || this.state.providerCNP === '' || this.state.providerLocation === '' || this.state.providerStreetName === ''
        || this.state.providerStreetNumber === '' || this.state.providerSector === '' || this.state.providerIBAN === '' || this.state.providerBank === '' || this.state.providerRepresentative === '')
        alert("Missing data")
      else {
        this.setState({
          isOk: !this.state.isOk
        })
        this.store.addUserProvider(this.props.id, this.props.contractId, {
          providerName: this.state.providerName,
          providerCountry: this.state.providerCountry,
          providerZIP: this.state.providerZIP,
          providerCIF: this.state.providerCIF,
          providerCI: this.state.providerCI,
          providerEmail: this.state.providerEmail,
          providerNumber: this.state.providerNumber,
          providerCNP: this.state.providerCNP,
          providerLocation: this.state.providerLocation,
          providerStreetName: this.state.providerStreetName,
          providerStreetNumber: this.state.providerStreetNumber,
          providerSector: this.state.providerSector,
          providerIBAN: this.state.providerIBAN,
          providerBank: this.state.providerBank,
          providerRepresentative: this.state.providerRepresentative,
          providerRepresentativeFunction: this.state.providerRepresentativeFunction
        })
      }

    }


    this.handleChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }


    this.handleSubmit = (e) => { e.preventDefault() }

  }


  async componentDidMount() {


  }

  render() {




    return (
      <div>

        <div class="container">
          <h1>Provider Info</h1>
          <form onSubmit={this.handleSubmit} >
            <label htmlFor="providerName">Provider Name</label>
            <input type="text" name="providerName" class="form-control" id="providerName" onChange={this.handleChange} value={this.state.providerName} required />

            <label htmlFor="providerCNP">Provider Identification Number</label>
            <input type="text" name="providerCNP" class="form-control" id="providerCNP" onChange={this.handleChange} value={this.state.providerCNP} required />

            <label htmlFor="providerCI">Provider Identity Card Series and Number</label>
            <input type="text" name="providerCI" class="form-control" id="providerCI" onChange={this.handleChange} value={this.state.providerCI} required />


            <label htmlFor="providerCountry">Provider Country</label>
            <input type="text" name="providerCountry" class="form-control" id="providerCountry" onChange={this.handleChange} value={this.state.providerCountry} required />

            <label htmlFor="providerLocation">Provider City</label>
            <input type="text" name="providerLocation" class="form-control" id="contractDate" onChange={this.handleChange} value={this.state.providerLocation} required />


            <label htmlFor="providerStreetName">Provider Address Street</label>
            <input type="text" name="providerStreetName" class="form-control" id="providerStreetName" onChange={this.handleChange} value={this.state.providerStreetName} required />

            <label htmlFor="providerStreetNumber">Provider Address Number</label>
            <input type="number" name="providerStreetNumber" class="form-control" id="providerStreetNumber" onChange={this.handleChange} value={this.state.providerStreetNumber} required />

            <label htmlFor="providerZIP">Provider ZIP Code</label>
            <input type="text" name="providerZIP" class="form-control" id="providerZIP" onChange={this.handleChange} value={this.state.providerZIP} required />

            <label htmlFor="providerSector">Provider Sector/State</label>
            <input type="text" name="providerSector" class="form-control" id="providerSector" onChange={this.handleChange} value={this.state.providerSector} required />



            <label htmlFor="providerEmail">Provider Email</label>
            <input type="text" name="providerEmail" class="form-control" id="providerEmail" onChange={this.handleChange} value={this.state.providerEmail} required />

            <label htmlFor="providerNumber">Provider Phone Number</label>
            <input type="text" name="providerNumber" class="form-control" id="providerNumber" onChange={this.handleChange} value={this.state.providerNumber} required />

            <label htmlFor="providerCIF">Provider CIF</label>
            <input type="text" name="providerCIF" class="form-control" id="providerCIF" onChange={this.handleChange} value={this.state.providerCIF} required />

            <label htmlFor="providerIBAN">Provider IBAN</label>
            <input type="text" name="providerIBAN" class="form-control" id="providerIBAN" onChange={this.handleChange} value={this.state.providerIBAN} required />

            <label htmlFor="providerBank">Provider Bank</label>
            <input type="text" name="providerBank" class="form-control" id="providerBank" onChange={this.handleChange} value={this.state.providerBank} required />

            <label htmlFor="providerRepresentative">Provider Representative</label>
            <input type="text" name="providerRepresentative" class="form-control" id="providerRepresentative" onChange={this.handleChange} value={this.state.providerRepresentative} required />

            <label htmlFor="providerRepresentativeFunction">Provider Representative Function</label>
            <input type="text" name="providerRepresentativeFunction" class="form-control" id="providerRepresentativeFunction" onChange={this.handleChange} value={this.state.providerRepresentativeFunction} required />

            <p />




          </form>
          {this.state.isOk && <Alert variant="success">Provider succesfully added</Alert>}
          <button class="btn btn-primary btn-l js-scroll-trigger" onClick={this.saveInfo} >Save</button>
        </div>
      </div>
    )
  }



}


export default AddProvider