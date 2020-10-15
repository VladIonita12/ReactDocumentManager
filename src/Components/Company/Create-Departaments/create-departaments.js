import React, {Component, useState} from 'react';
import App from '../../../App';
import GoogleLogin from 'react-google-login';
import Alert from 'react-bootstrap/Alert'
import './create-departaments.css';
import DepartamentStore from '../../../Stores/Company/DepartamentStore';
import ContractPage from '../../User/Contract-Component/contracts-page';
import CompanyContractPage from '../Company-Contracts/company-contracts-page';
import SignInDepartament from '../Sign-In-Departaments/sign-in-departaments';
const SERVER = 'http://3.21.21.92:8080'



class CreateDepartaments extends Component{
  constructor(props) { 
    super(props);
    
    this.state = {departamentData: [],
      departmentName: '',
      passwordDepartment: '',
      isOk :false,
      cancel:false,
      existing:false,
      googleSign:null, 
      numberDepartments:0, 
      isOkSignIn:false,
      departmentId:0,
      okGDPR: false
    };
    this.store = new DepartamentStore()

    this.add = ()=>{
      
      var ok=false
      for(var i=0;i<this.store.departaments.length;i++){ console.log(this.store.departaments[i].departmentName)
        if(this.state.departamentData[i].departmentName===this.state.departmentName){
        console.log(this.state.departamentData[i].departmentName)
        ok=true
    }}
    if(ok===false){

      this.setState({
        numberDepartments: this.state.departamentData.length
      })
      this.setState({
        isOk:!this.state.isOk
      })
      this.store.addDepartament(this.props.id,{
        departmentName: this.state.departmentName,
        passwordDepartment: this.state.passwordDepartment
      })
    }
      else alert("Existing account")
  }

 
  
  
   
    this.okVal = () => {
      
        this.setState({
            isOk: !this.state.isOk
        })
    
    }
    this.isOkSign = (index) =>{
      this.setState({
        isOkSignIn:!this.state.isOkSignIn,
        departmentId:index
      })
      console.log(index)
      console.log(this.state.departmentId)
      
    }

   

    this.cancelApp = ()=>{
        this.setState({
            cancel:!this.state.cancel
        })
    }
   
    this.handleChange = (evt)=>{
      this.setState({
           [evt.target.name] : evt.target.value
      })
  }

  
  }
  async componentDidMount() {

    this.store.getDepartaments(this.props.id)
    this.store.emitter.addListener('GET_DEP_SUCCESS', ()=>{
        this.setState({
            departamentData : this.store.departaments
        })
    })


  }
  
 render() {
 
  console.log(this.props.id)
 
  if(this.state.isOk && this.store.departaments.length>this.state.numberDepartments){
        
        
        
    return <CompanyContractPage idCompany={this.props.id} idDepartment={this.state.departamentData[this.state.departamentData.length-1].id} ></CompanyContractPage>
   
  }
 if(this.state.isOkSignIn && this.state.departmentId)
 return <CompanyContractPage idCompany={this.props.id} idDepartment={this.state.departmentId} ></CompanyContractPage>
   
    if( this.state.cancel ){
   
      // fetch(`${SERVER}/userdata`, {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     departmentName: `${this.state.departmentName}`,
      //     password: `${this.state.password}`
      //   })
      // })

      
      
      return <App/>
        
   }
   
       
      return (
        <div className='App'>

          <link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" />
    <link href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" rel="stylesheet" />
          <div class="row">
  <div class="col-lg-10 col-xl-9 mx-auto">
    <div class="card card-signin flex-row my-5">
      <div class="card-img-left d-none d-md-flex">
       
      </div>
      <div class="card-body">
        {this.state.departamentData && this.state.departamentData.map(departament => (
        <p key={departament}>{departament.departmentName}</p>
      ))}
        <h5 class="card-title text-center">Create Departaments</h5>
        <form class="form-signin">
          

          <div class="form-label-group">
            <input type="input" id="inputEmail" name="departmentName" class="form-control" onChange={this.handleChange} placeholder="Email address" value={this.state.departmentName} required />
            <label for="inputEmail">Departament name</label>
          </div>
          
         

          <div class="form-label-group">
            <input type="password" id="inputPassword" name="passwordDepartment" class="form-control" value={this.state.passwordDepartment} onChange={this.handleChange} placeholder="Password" required />
            <label for="inputPassword">Password</label>
          </div>
          
          <div class="form-label-group">
            <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required/>
            <label for="inputConfirmPassword">Confirm password</label>
          </div>

         
          
          
          
         
        </form>

        <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.add}>Register</button>
        <p></p>
        
        
        <SignInDepartament id={this.props.id} onCancel={this.onCancel} onAccept={this.isOkSign}></SignInDepartament>

        <button class="btn btn-lg btn-block text-uppercase" onClick={this.cancelApp}> Cancel</button>
        </div>
        
        
    </div>
    
  </div>
 
</div>
           
       

        </div>
        
      );
    }



}


export default CreateDepartaments