import React, {Component, useState} from 'react';
import App from '../../../App';
import GoogleLogin from 'react-google-login';
import Alert from 'react-bootstrap/Alert'

import logo from '../Company-Contracts/Asset.svg'
import AddCompanyClient from '../Add-Company-Client/add-company-client';
import AddCompanyProvider from '../Add-Company-Provider/add-company-provider';
import CompanyContractsStore from '../../../Stores/Company/CompanyContractsStore';
import CompanyParagraphStore from '../../../Stores/Company/CompanyParagraphStore';

class AddCompanyContract extends Component{
    constructor(props) { 
        super(props);


    this.state = {
        paragraphName:'',
        paragraphText:'',
        contractName: "",
        contractDate: "",
        valueOfContract: 0,
        contractAdded:false,
        nrParagraph: 0,
        addedParagraph:false,
        finished:false
        
      }
      this.cancel = () =>{
        this.props.onCancel()
    }


    this.store = new CompanyContractsStore();
    this.store1 = new CompanyParagraphStore();
    
    this.AddCompanyContract = () =>{
      this.setState({
        contractAdded: !this.state.contractAdded
      })

      this.store.addContract(this.props.idCompany,this.props.idDepartment,{
        contractName: this.state.contractName,
        contractDate: this.state.contractDate,
        valueOfContract:this.state.valueOfContract
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

      this.addParagraph = () =>{
        this.setState({nrParagraph:this.state.nrParagraph+1,
        addedParagraph:true})

        this.store1.addParagraph(this.props.idCompany,this.props.idDepartment,this.props.contractId,{
          paragraphName: this.state.paragraphName,
          paragraphText: this.state.paragraphText
        })
        
        this.setState({
          paragraphName: '',
          paragraphText:''
        })

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



        let {contractName, contractDate,valueOfContract, paragraphName,paragraphText, nrParagraph} = this.state

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

        <label htmlFor="paragraphName">Contract Name</label> 
            <input type="text" name="contractName" class="form-control" id="contractName" onChange={this.handleChange} value={contractName} />
            <label htmlFor="contractDate">Contract Date</label> 
            <input type="text" name="contractDate" class="form-control" id="contractDate" onChange={this.handleChange} value={contractDate} />
            <label htmlFor="valueOfContract">Contract Value</label> 
            <input type="text" name="valueOfContract" class="form-control" id="valueOfContract" onChange={this.handleChange} value={valueOfContract} />
          
            <button class="btn btn-primary btn-l js-scroll-trigger" onClick={this.AddCompanyContract}>Save contract information</button>
            <p></p>
          {this.state.contractAdded && <Alert variant="success">Contract succesfully added</Alert>}
         
          {this.state.contractAdded && <AddCompanyClient idCompany={this.props.idCompany} idDepartment={this.props.idDepartment} contractId={this.props.contractId}></AddCompanyClient>}
          <hr class="divider "></hr>
          {this.state.contractAdded && <AddCompanyProvider idCompany={this.props.idCompany} idDepartment={this.props.idDepartment} contractId={this.props.contractId}></AddCompanyProvider>}
          <hr class="divider "></hr>
          <form onSubmit={this.handleSubmit} >
           
            <p/>
            {this.state.addedParagraph && <Alert variant="success">Paragraph #{this.state.nrParagraph} succesfully added</Alert>}
            {
          this.state.contractAdded &&  
                  <div >
                    <label htmlFor="paragraphName">{`Clause #${nrParagraph + 1}`}</label>
                    <input
                      type="text"
                      name="paragraphName"
                      
                      id="paragraphName"
                      onChange={this.handleChange}
                      value={paragraphName} 
                      className="paragraphName"
                      class="form-control"
                       
                    />
                    <label htmlFor="paragraphText">Text</label>
                    <textarea
                      type="text"
                      name="paragraphText"
                      
                      id="paragraphText"
                      onChange={this.handleChange} 
                      value={paragraphText}
                      className="paragraphText"
                      class="form-control"
                      
                    />
<p></p>
<button class="btn btn-primary btn-l js-scroll-trigger" onClick={this.addParagraph}>Add new Paragraph</button>
                  </div>
                
              }
              
            
            
            
            <p/>
            <button class="btn btn-primary btn-l js-scroll-trigger" onClick={this.cancel} >Finish</button>
          </form>
          </div>
          </div>
          )
        }


}


export default AddCompanyContract