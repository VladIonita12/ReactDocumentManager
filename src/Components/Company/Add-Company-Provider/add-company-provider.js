import React, {Component, useState} from 'react';
import App from '../../../App';
import GoogleLogin from 'react-google-login';
import Alert from 'react-bootstrap/Alert'

import logo from '../Company-Contracts/Asset.svg'
import UserContractsStore from '../../../Stores/User/UserContractsStore';
import UserProviderStore from '../../../Stores/User/UserProviderStore';
import CompanyProviderStore from '../../../Stores/Company/CompanyProviderStore';
const SERVER = 'http://3.21.21.92:8080'



class AddCompanyProvider extends Component{
  constructor(props) { 
    super(props);


 this.state = {
    isOk:false,
    
    providerName: '',
    providerCountry:'',
    providerZIP:'',
    providerCIF:'',
    providerCI:'',
    providerEmail:'',
    providerNumber:'',
    providerCNP:'',
    providerLocation:'',
    providerStreetName:'',
    providerStreetNumber:'',
    providerSector:'',
    providerIBAN:'',
    providerBank:'',
    providerRepresentative:'',
    providerRepresentativeFunction:''
  }
  this.store = new CompanyProviderStore();
  


this.saveInfo = () =>{
  this.setState({
    isOk:!this.state.isOk
  })
  this.store.addUserProvider(this.props.idCompany, this.props.idDepartment,this.props.contractId,{
    providerName: this.state.providerName,
    providerCountry:this.state.providerCountry,
    providerZIP:this.state.providerZIP,
    providerCIF:this.state.providerCIF,
    providerCI:this.state.providerCI,
    providerEmail:this.state.providerEmail,
    providerNumber:this.state.providerNumber,
    providerCNP:this.state.providerCNP,
    providerLocation:this.state.providerLocation,
    providerStreetName:this.state.providerStreetName,
    providerStreetNumber:this.state.providerStreetNumber,
    providerSector:this.state.providerSector,
    providerIBAN:this.state.providerIBAN,
    providerBank:this.state.providerBank,
    providerRepresentative:this.state.providerRepresentative,
    providerRepresentativeFunction:this.state.providerRepresentativeFunction
  })
  
}


  this.handleChange = (evt)=>{
    this.setState({
         [evt.target.name] : evt.target.value
    })
}


this.handleSubmit = (e) => { e.preventDefault() }

  }


  async componentDidMount() {

    
  }
  
 render() {


    

 return(
    <div>
        
    <div class="container">
        <h1>Provider Info</h1>
      <form onSubmit={this.handleSubmit} >
        <label htmlFor="providerName">Provider Name</label> 
        <input type="text" name="providerName" class="form-control" id="providerName" onChange={this.handleChange} value={this.state.providerName} />
       
        <label htmlFor="providerCNP">Provider Identification Number</label> 
        <input type="text" name="providerCNP" class="form-control" id="providerCNP" onChange={this.handleChange} value={this.state.providerCNP} />
       
        <label htmlFor="providerCI">Provider Identity Card Series and Number</label> 
        <input type="text" name="providerCI" class="form-control" id="providerCI" onChange={this.handleChange} value={this.state.providerCI} />
       

        <label htmlFor="providerCountry">Provider Country</label> 
        <input type="text" name="providerCountry" class="form-control" id="providerCountry" onChange={this.handleChange} value={this.state.providerCountry} />
       
        <label htmlFor="providerLocation">Provider City</label> 
        <input type="text" name="providerLocation" class="form-control" id="contractDate" onChange={this.handleChange} value={this.state.providerLocation} />
       

        <label htmlFor="providerStreetName">Provider Address Street</label> 
        <input type="text" name="providerStreetName" class="form-control" id="providerStreetName" onChange={this.handleChange} value={this.state.providerStreetName} />
       
        <label htmlFor="providerStreetNumber">Provider Address Number</label> 
        <input type="text" name="providerStreetNumber" class="form-control" id="providerStreetNumber" onChange={this.handleChange} value={this.state.providerStreetNumber} />
       
        <label htmlFor="providerZIP">Provider ZIP Code</label> 
        <input type="text" name="providerZIP" class="form-control" id="providerZIP" onChange={this.handleChange} value={this.state.providerZIP} />
       
        <label htmlFor="providerSector">Provider Sector/State</label> 
        <input type="text" name="providerSector" class="form-control" id="providerSector" onChange={this.handleChange} value={this.state.providerSector} />
        

        
        <label htmlFor="providerEmail">Provider Email</label> 
        <input type="text" name="providerEmail" class="form-control" id="providerEmail" onChange={this.handleChange} value={this.state.providerEmail} />
       
        <label htmlFor="providerNumber">Provider Phone Number</label> 
        <input type="text" name="providerNumber" class="form-control" id="providerNumber" onChange={this.handleChange} value={this.state.providerNumber} />
        
        <label htmlFor="providerCIF">Provider CIF</label> 
        <input type="text" name="providerCIF" class="form-control" id="providerCIF" onChange={this.handleChange} value={this.state.providerCIF} />
        
        <label htmlFor="providerIBAN">Provider IBAN</label> 
        <input type="text" name="providerIBAN" class="form-control" id="providerIBAN" onChange={this.handleChange} value={this.state.providerIBAN} />
        
        <label htmlFor="providerBank">Provider Bank</label> 
        <input type="text" name="providerBank" class="form-control" id="providerBank" onChange={this.handleChange} value={this.state.providerBank} />
        
        <label htmlFor="providerRepresentative">Provider Representative</label> 
        <input type="text" name="providerRepresentative" class="form-control" id="providerRepresentative" onChange={this.handleChange} value={this.state.providerRepresentative} />
        
        <label htmlFor="providerRepresentativeFunction">Provider Representative Function</label> 
        <input type="text" name="providerRepresentativeFunction" class="form-control" id="providerRepresentativeFunction" onChange={this.handleChange} value={this.state.providerRepresentativeFunction} />
        
        <p/>
        
        
       
        
      </form>
  {this.state.isOk && <Alert variant="success">Provider succesfully added</Alert>}
      <button class="btn btn-primary btn-l js-scroll-trigger"  onClick={this.saveInfo} >Save</button>
      </div>
      </div>
      )
    }



}


export default AddCompanyProvider