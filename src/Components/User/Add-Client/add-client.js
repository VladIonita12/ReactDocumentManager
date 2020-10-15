import React, { Component, useState } from 'react';
import App from '../../../App';
import GoogleLogin from 'react-google-login';
import Alert from 'react-bootstrap/Alert'
import './add-client.css';
import logo from '../Contract-Component/Asset.svg'
import UserContractsStore from '../../../Stores/User/UserContractsStore';
import UserClientStore from '../../../Stores/User/UserClientStore';
const SERVER = 'http://3.14.246.83:8080'



class AddClient extends Component {
  constructor(props) {
    super(props);


    this.state = {
      isOk: false,

      clientName: '',
      clientCountry: '',
      clientZIP: '',
      clientCIF: '',
      clientCI: '',
      clientEmail: '',
      clientNumber: '',
      clientCNP: '',
      clientLocation: '',
      clientStreetName: '',
      clientStreetNumber: '',
      clientSector: '',
      clientIBAN: '',
      clientBank: '',
      clientRepresentative: '',
      clientRepresentativeFunction: ''
    }
    this.store = new UserClientStore();



    this.saveInfo = () => {
      
      if(this.state.clientName===''||this.state.clientCountry===''||this.state.clientZIP===''||this.state.clientCIF===''||this.state.clientCI===''||
      this.state.clientEmail===''||this.state.clientNumber===''||this.state.clientCNP===''||this.state.clientLocation===''||this.state.clientStreetName===''
      ||this.state.clientStreetNumber===''||this.state.clientSector===''||this.state.clientIBAN===''||this.state.clientBank===''||this.state.clientRepresentative==='')
      alert("Missing data")
      else {this.setState({
        isOk:!this.state.isOk
      })
      this.store.addUserClient(this.props.id,this.props.contractId,{
        clientName: this.state.clientName,
        clientCountry:this.state.clientCountry,
        clientZIP:this.state.clientZIP,
        clientCIF:this.state.clientCIF,
        clientCI:this.state.clientCI,
        clientEmail:this.state.clientEmail,
        clientNumber:this.state.clientNumber,
        clientCNP:this.state.clientCNP,
        clientLocation:this.state.clientLocation,
        clientStreetName:this.state.clientStreetName,
        clientStreetNumber:this.state.clientStreetNumber,
        clientSector:this.state.clientSector,
        clientIBAN:this.state.clientIBAN,
        clientBank:this.state.clientBank,
        clientRepresentative:this.state.clientRepresentative,
        clientRepresentativeFunction:this.state.clientRepresentativeFunction
      })}
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
          <h1>Client Info</h1>
          <form onSubmit={this.handleSubmit} >
            <label htmlFor="clientName">Client Name</label>
            <input type="text" name="clientName" class="form-control" id="clientName" onChange={this.handleChange} value={this.state.clientName} />

            <label htmlFor="clientCNP">Client Identification Number</label>
            <input type="text" name="clientCNP" class="form-control" id="clientCNP" onChange={this.handleChange} value={this.state.clientCNP} />

            <label htmlFor="clientCI">Client Identity Card Series and Number</label>
            <input type="text" name="clientCI" class="form-control" id="clientCI" onChange={this.handleChange} value={this.state.clientCI} />


            <label htmlFor="clientCountry">Client Country</label>
            <input type="text" name="clientCountry" class="form-control" id="clientCountry" onChange={this.handleChange} value={this.state.clientCountry} />

            <label htmlFor="clientLocation">Client City</label>
            <input type="text" name="clientLocation" class="form-control" id="contractDate" onChange={this.handleChange} value={this.state.clientLocation} />


            <label htmlFor="clientStreetName">Client Address Street</label>
            <input type="text" name="clientStreetName" class="form-control" id="clientStreetName" onChange={this.handleChange} value={this.state.clientStreetName} />

            <label htmlFor="clientStreetNumber">Client Address Number</label>
            <input type="number" name="clientStreetNumber" class="form-control" id="clientStreetNumber" onChange={this.handleChange} value={this.state.clientStreetNumber} />

            <label htmlFor="clientZIP">Client ZIP Code</label>
            <input type="text" name="clientZIP" class="form-control" id="clientZIP" onChange={this.handleChange} value={this.state.clientZIP} />

            <label htmlFor="clientSector">Client Sector/State</label>
            <input type="text" name="clientSector" class="form-control" id="clientSector" onChange={this.handleChange} value={this.state.clientSector} />



            <label htmlFor="clientEmail">Client Email</label>
            <input type="text" name="clientEmail" class="form-control" id="clientEmail" onChange={this.handleChange} value={this.state.clientEmail} />

            <label htmlFor="clientNumber">Client Phone Number</label>
            <input type="text" name="clientNumber" class="form-control" id="clientNumber" onChange={this.handleChange} value={this.state.clientNumber} />

            <label htmlFor="clientCIF">Client CIF</label>
            <input type="text" name="clientCIF" class="form-control" id="clientCIF" onChange={this.handleChange} value={this.state.clientCIF} />

            <label htmlFor="clientIBAN">Client IBAN</label>
            <input type="text" name="clientIBAN" class="form-control" id="clientIBAN" onChange={this.handleChange} value={this.state.clientIBAN} />

            <label htmlFor="clientBank">Client Bank</label>
            <input type="text" name="clientBank" class="form-control" id="clientBank" onChange={this.handleChange} value={this.state.clientBank} />

            <label htmlFor="clientRepresentative">Client Representative</label>
            <input type="text" name="clientRepresentative" class="form-control" id="clientRepresentative" onChange={this.handleChange} value={this.state.clientRepresentative} />

            <label htmlFor="clientRepresentativeFunction">Client Representative Function</label>
            <input type="text" name="clientRepresentativeFunction" class="form-control" id="clientRepresentativeFunction" onChange={this.handleChange} value={this.state.clientRepresentativeFunction} />

            <p />




          </form>
          {this.state.isOk && <Alert variant="success">Client succesfully added</Alert>}
          <button class="btn btn-primary btn-l js-scroll-trigger" onClick={this.saveInfo} >Save</button>
        </div>
      </div>
    )
  }


}


export default AddClient