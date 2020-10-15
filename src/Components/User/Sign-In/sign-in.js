import React, {Component, useState}  from 'react';
import Alert from 'react-bootstrap/Alert'
import './sign-in.css';
import App from '../../../App'
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import UserStore from '../../../Stores/User/UserStore';
import ContractPage from '../Contract-Component/contracts-page';
import GDPR from '../GDPR/gdpr';
const SERVER = 'http://3.14.246.83:8080'




class SignIn extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      usersData: [],
      email: '',
      password: '',
      isOk :false,
      googleLogin:null,
      register: false,
      noLogin: false,
      cancel:false,
      index:null,
      gdpr:false,
      active:false,
      okGDPR:false
    };

    this.store = new UserStore()
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

    this.googleLogin = (response)=>{
      this.setState({
       googleLogin: !this.state.googleLogin
    })
    this.setState({
      googleLogin : response,
      isOk: !this.state.isOk
      
  })
var ok=false
  for(var i=0;i<this.state.usersData.length;i++){
    console.log(this.state.usersData[i].userName)
    if(this.state.usersData[i].userName === response.googleId && this.state.usersData[i].password==="none" )
    {this.setState({index:this.state.usersData[i].id
    })
    ok=true
   
    }
   }

   if(ok===false)
   alert("No account available")
   

    }

    this.okVal = () => {
      
        this.setState({
            isOk: !this.state.isOk
        })

        var ok=false
        for(var i=0;i<this.state.usersData.length;i++){
          
          if(this.state.usersData[i].userName ===this.state.email && this.state.usersData[i].password ===this.state.password)
          {
          this.setState({
            index:this.state.usersData[i].id
          })
          ok=true
          
          
          }
         }
         
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

  this.store.getUsers()
 
  this.store.emitter.addListener('GET_USERS_SUCCESS', ()=>{
    
      this.setState({
          usersData : this.store.users
      })
      
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
  return <ContractPage id={this.state.index}></ContractPage>
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
            <GoogleLogin
    clientId="199811801004-3oddr9f63p5u8ebvhtp7pcc553gsfobh.apps.googleusercontent.com"
    render={renderProps => (
      <button class="btn btn-lg btn-google btn-block text-uppercase" onClick={renderProps.onClick} ><i class="fab fa-google mr-2"></i>Sign in with Google</button>
    )}
    buttonText="Login"
    onSuccess={this.googleLogin}
    isSignedIn={false}
    cookiePolicy={'single_host_origin'}
  />
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

export default SignIn;