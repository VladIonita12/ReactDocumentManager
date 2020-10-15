import React, {Component, useState} from 'react';
import App from '../../../App';
import GoogleLogin from 'react-google-login';
import Alert from 'react-bootstrap/Alert'

import logo from '../Company-Contracts/Asset.svg'
import UserContractsStore from '../../../Stores/User/UserContractsStore';

import UserParagraphStore from '../../../Stores/User/UserParagraphStore';

import UserAnnexesStore from '../../../Stores/User/UserAnnexStore';
import CompanyAnnexStore from '../../../Stores/Company/CompanyAnnexStore';

const SERVER = 'http://3.21.21.92:8080'



class AddCompanyAnnex extends Component{
    constructor(props) { 
        super(props);


    this.state = {
        annexNumber:'',
        annexText:'',
        contractName: "",
        contractDate: "",
        valueOfContract: 0,
        contractAdded:false,
        nrParagraph: 0,
        addedAnnex:false,
        finished:false
        
      }
      this.cancel = () =>{
        this.props.onCancel()
    }


    this.store = new CompanyAnnexStore();
    
    
    this.AddAnnex = () =>{
      this.setState({
        contractAdded: !this.state.contractAdded
      })

      this.store.addCompanyAnnex(this.props.idCompany,this.props.idDepartment, this.props.contractId ,{
        
        annexText: this.state.annexText
      })

     
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

      this.add = () =>{
        this.setState({
          contractAdded: !this.state.contractAdded
        })

        this.store.addCompanyAnnex(this.props.idCompany,this.props.idDepartment ,this.props.contractId,{
          annexNumber: this.state.annexNumber,
          annexText: this.state.annexText
        })
        this.props.onCancel()
      

      }

    
      this.handleSubmit = (e) => { e.preventDefault() }
      }


      async componentDidMount() {

        
      }
      
     render() {



        let {contractName, contractDate,valueOfContract, annexNumber,annexText, nrParagraph} = this.state

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
                    
                    <label htmlFor="annexText">Text</label>
                    <textarea
                      type="text"
                      name="annexText"
                      
                      id="annexText"
                      onChange={this.handleChange} 
                      value={annexText}
                      className="annexText"
                      class="form-control"
                      
                    />
<p></p>
<button class="btn btn-primary btn-l js-scroll-trigger" onClick={this.add}>Add new Annex</button>
                  </div>

                  
        
          </div>
          </div>
          )
        }


}


export default AddCompanyAnnex