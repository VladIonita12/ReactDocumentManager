import React, {Component, useState} from 'react';
import App from '../../../App';
import GoogleLogin from 'react-google-login';
import Alert from 'react-bootstrap/Alert'

import logo from '../Company-Contracts/Asset.svg'
import UserContractsStore from '../../../Stores/User/UserContractsStore';

import UserParagraphStore from '../../../Stores/User/UserParagraphStore';

import UserAnnexesStore from '../../../Stores/User/UserAnnexStore';
import UserAddenumStore from '../../../Stores/User/UserAddenumStore';
import CompanyAddenumStore from '../../../Stores/Company/CompanyAddenumStore';

const SERVER = 'http://3.21.21.92:8080'



class AddCompanyAddenum extends Component{
    constructor(props) { 
        super(props);


    this.state = {
        addenumNumber:'',
        addenumText:'',
        contractName: "",
        contractDate: "",
        valueOfContract: 0,
        contractAdded:false,
        nrParagraph: 0,
        addedAddenum:false,
        finished:false
        
      }
      this.cancel = () =>{
        this.props.onCancel()
    }


    this.store = new CompanyAddenumStore();
    
    
    this.add = () =>{
      this.setState({
        contractAdded: !this.state.contractAdded
      })

      this.store.addCompanyAddenum(this.props.idCompany,this.props.idDepartment, this.props.contractId ,{
        
        addenumText: this.state.addenumText
      })

      this.props.onCancel()
    }

    this.handleChange = (evt)=>{
        this.setState({
             [evt.target.name] : evt.target.value
        })
    }

    this.saveContract = () =>{
      this.setState({
        finished:!this.state.finished
      })
    }

      this.handleChange = (e) => {
        
          this.setState({ [e.target.name]: e.target.value })
        
      }

     

    // this.handleChange = (evt)=>{
    //     this.setState({
    //          [evt.target.name] : evt.target.value
    //     })
    // }
    
      this.handleSubmit = (e) => { e.preventDefault() }
      }


      async componentDidMount() {

        
      }
      
     render() {



        let {contractName, contractDate,valueOfContract, addenumNumber,addenumText, nrParagraph} = this.state

     return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  static-top">
  <div class="container"><img src={logo} alt="React" width="180" height="80"/>
    <a class="navbar-brand" href="#">
          
        </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <button class="nav-link btn btn-xl js-scroll-trigger" href="#">Home
                
              </button>
        </li>
        
        
        
        <li class="nav-item">
          <a class="nav-link btn btn-xl js-scroll-trigger" onClick={this.cancel}>Cancel</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container">
<div >
                    
                    <label htmlFor="addenumText">Text</label>
                    <textarea
                      type="text"
                      name="addenumText"
                      
                      id="addenumText"
                      onChange={this.handleChange} 
                      value={addenumText}
                      className="addenumText"
                      class="form-control"
                      
                    />
<p></p>
<button class="btn btn-primary btn-l js-scroll-trigger" onClick={this.add}>Add new Addenum</button>
                  </div>

               
        
          </div>
          </div>
          )
        }


}


export default AddCompanyAddenum