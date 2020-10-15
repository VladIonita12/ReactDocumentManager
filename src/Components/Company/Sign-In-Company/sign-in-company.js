import React, {Component, useState}  from 'react';
import Alert from 'react-bootstrap/Alert'
import './sign-in-company.css';
import App from '../../../App'
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import CompanyStore from '../../../Stores/Company/CompanyStore';
import CreateDepartaments from '../Create-Departaments/create-departaments';
import SignInDepartament from '../Sign-In-Departaments/sign-in-departaments';
import SignUpCompany from '../Sign-Up-Company/sign-up-company';
import GDPR from '../GDPR/gdpr'
const SERVER = 'http://18.224.45.22:8080'





class SignInCompany extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      companyData: [],
      email: '',
      passwordCompany: '',
      isOk :false,
      googleLogin:null,
      register: false,
      noLogin: false,
      cancel:false,
      index:null,
      okGDPR: false
    };

    this.store = new CompanyStore()
    this.cancel = ()=>{
      this.setState({
        cancel: !this.state.cancel
    })

    }

    this.ok = () =>{
      this.setState({
        okGDPR: !this.state.okGDPR
      })
    }

    this.okVal = () => {
      
        this.setState({
            isOk: !this.state.isOk
        })

        var ok=false
        for(var i=0;i<this.state.companyData.length;i++){
          console.log(this.state.companyData[i].userName)
          if(this.state.companyData[i].userName ===this.state.email && this.state.companyData[i].passwordCompany ===this.state.password)
          {
          this.setState({
            index:this.state.companyData[i].id
          })
          ok=true
          
          console.log(this.state.index)
          }
         }
         console.log(this.state.index)
         if(ok===false)
         alert("Wrong information")
    
    }
    this.notLogged = () => {
      
      this.setState({
          noLogin: !this.state.noLogin
      })
  
  }

    
    this.handleChange = (evt)=>{
      this.setState({
           [evt.target.name] : evt.target.value
      })
  }
  }
  
 
async componentDidMount() {

  this.store.getCompanies()
  console.log(this.store.getCompanies())
  this.store.emitter.addListener('GET_COMP_SUCCESS', ()=>{
    console.log(this.store.emitter)
      this.setState({
          companyData : this.store.companies
      })
      console.log(this.store.companies)
  })
  
   
}
  render() {
 
   

  if(this.state.cancel)
 return <App></App>

 var ok = false
 var index
 if(this.state.isOk){
  
  var pos
  
  
  
}



if(this.state.index){
  return <CreateDepartaments id={this.state.index}></CreateDepartaments>
}


if(this.state.okGDPR)
    return (
      <div className='sign-in'>
          
 
          <link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" />
        <link href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" rel="stylesheet" />
    
    <div class="row">
    <script src="" async defer></script>
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" name="email" placeholder="Email address" onChange={this.handleChange} required autofocus/>
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" name="password" placeholder="Password" onChange={this.handleChange} required/>
                <label for="inputPassword">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              
              
             
            
            </form>

            <button class="btn btn-lg btn-primary btn-block text-uppercase"  onClick={this.okVal}>Sign in</button>
            <p></p>
            
            <button class="btn btn-lg form-signin btn-block text-uppercase"  onClick={this.cancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  

      </div>
      
    );
    else return (
      <div class="container">
        <GDPR></GDPR>
      
    <button type="checkbox" class="form-check-input" id="exampleCheck1" onClick={this.ok}>I consent</button>
   
  </div>
    )
  }
}

export default SignInCompany;