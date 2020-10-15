import React, {Component, useState} from 'react';
import App from '../../../App';
import GoogleLogin from 'react-google-login';
import Alert from 'react-bootstrap/Alert'
import './sign-up.css';
import UserStore from '../../../Stores/User/UserStore';
import ContractPage from '../Contract-Component/contracts-page';
import { useAlert } from 'react-alert'
import ContractCard from '../Contract-Card/contract-card';
import GDPR from '../GDPR/gdpr';
const SERVER = 'http://3.14.246.83:8080'



class SignUp extends Component{
 
    constructor() { 
        super();
        
        this.state = {usersData: [],
          userName: '',
          password: '',
          isOk :false,
          cancel:false,
          existing:false,
          googleSign:null,
          nrAccounts:0,
          okGDPR: false
          
        };
        this.store = new UserStore()
        this.ok = () =>{
          this.setState({
            okGDPR: !this.state.okGDPR
          })
        }
        this.add = ()=>{
          
          var ok=false
          for(var i=0;i<this.store.users.length;i++){ console.log(this.store.users[i].userName)
            if(this.state.usersData[i].userName===this.state.userName){
            console.log(this.state.usersData[i].userName)
            ok=true
        }}
        if(ok===false){
          this.setState({
            nrAccounts: this.state.usersData.length
          })
          this.store.addUser({
            userName: this.state.userName,
            password: this.state.password
          })
          
          
          this.setState({
            isOk:!this.state.isOk
          })
        }
          else alert("Existing account")
      }
    
     
      
      this.googleSign = (response)=>{
        var ok=false
          for(var i=0;i<this.store.users.length;i++){ console.log(this.store.users[i].userName)
            if(this.state.usersData[i].userName===response.googleId){
            console.log(this.state.usersData[i].userName)
            ok=true
        }}
        if(ok===false){
          this.setState({
            nrAccounts: this.state.usersData.length
          })
          this.setState({
            googleLogin : response,
            isOk:!this.state.isOk
        })
          console.log(response);
          this.store.addUser({
            userName: response.googleId,
            password: "none"
          })
        }
          else alert("Existing account")
          
    
      }
       
        this.okVal = () => {
          
            this.setState({
                isOk: !this.state.isOk
            })
            
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

        this.store.getUsers()
        this.store.emitter.addListener('GET_USERS_SUCCESS', ()=>{
            this.setState({
                usersData : this.store.users
            })
        })


      }
      
     render() {
      console.log(this.state.nrAccounts)
     
       if(this.state.isOk && this.store.users.length>this.state.nrAccounts){
        
        
        
        return <ContractPage id={this.state.usersData[this.state.usersData.length-1].id}></ContractPage>
       
      }
       
     
      
        if( this.state.cancel ){
       
          // fetch(`${SERVER}/userdata`, {
          //   method: 'POST',
          //   headers: {
          //     'Accept': 'application/json',
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({
          //     userName: `${this.state.userName}`,
          //     password: `${this.state.password}`
          //   })
          // })

          
          
          return <App/>
            
       }
       
       if(this.state.okGDPR)
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
            <h5 class="card-title text-center">Register</h5>
            <form class="form-signin">
              

              <div class="form-label-group">
                <input type="email" id="inputEmail" name="userName" class="form-control" onChange={this.handleChange} placeholder="Email address" value={this.state.userName} required />
                <label for="inputEmail">Email address</label>
              </div>
              
             

              <div class="form-label-group">
                <input type="password" id="inputPassword" name="password" class="form-control" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>
              
              <div class="form-label-group">
                <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required/>
                <label for="inputConfirmPassword">Confirm password</label>
              </div>

             
              
              
              
             
            </form>

            <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.add}>Register</button>
            <p></p>
            <GoogleLogin
    clientId="199811801004-3oddr9f63p5u8ebvhtp7pcc553gsfobh.apps.googleusercontent.com"
    render={renderProps => (
      <button class="btn btn-lg btn-google btn-block text-uppercase" onClick={renderProps.onClick} disabled={renderProps.disabled}><i class="fab fa-google mr-2"></i>Sign in with Google</button>
    )}
    buttonText="Login"
    onSuccess={this.googleSign}
    
    cookiePolicy={'single_host_origin'}
  />
            <button class="btn btn-lg btn-block text-uppercase" onClick={this.cancelApp}> Cancel</button>
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


export default SignUp