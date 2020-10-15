import React, { Component, useState } from 'react';
import Alert from 'react-bootstrap/Alert'
import './sign-in-departaments.css';
import App from '../../../App'
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import UserStore from '../../../Stores/User/UserStore';
import ContractPage from '../../User/Contract-Component/contracts-page';
import DepartamentStore from '../../../Stores/Company/DepartamentStore';
import CompanyContractPage from '../Company-Contracts/company-contracts-page';

const SERVER = 'http://3.14.246.83:8080'



class SignInDepartament extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departamentData: [],
      departmentName: '',
      passwordDepartment: '',
      isOk: false,
      googleLogin: null,
      register: false,
      noLogin: false,
      cancel: false,
      index: null,
      okGDPR: false
    };

    this.store = new DepartamentStore()
    this.cancel = () => {
      this.setState({
        cancel: !this.state.cancel
      })

    }



    this.okVal = () => {

      this.setState({
        isOk: !this.state.isOk
      })

      var ok = false
      for (var i = 0; i < this.state.departamentData.length; i++) {
        console.log(this.state.departamentData[i].departmentName)
        if (this.state.departamentData[i].departmentName === this.state.departmentName && this.state.departamentData[i].passwordDepartment === this.state.passwordDepartment) {
          this.setState({
            index: this.state.departamentData[i].id
          })
          ok = true

          console.log(this.state.index)
        }
      }
      console.log(this.state.departmentName)
      console.log(this.state.passwordDepartment)
     
      console.log(this.state.index)
      if (ok === false)
        alert("Wrong information")
      if(ok===true)
      this.props.onAccept(this.state.index)
    }
    this.notLogged = () => {

      this.setState({
        noLogin: !this.state.noLogin
      })

    }


    this.handleChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }
  }


  async componentDidMount() {

    this.store.getDepartaments(this.props.id)
    
    this.store.emitter.addListener('GET_DEP_SUCCESS', () => {
      console.log(this.store.emitter)
      this.setState({
        departamentData: this.store.departaments
      })
      console.log(this.store.departaments)
    })


  }
  render() {



    if (this.state.cancel)
      return <App></App>

    var ok = false
    var index
    if (this.state.isOk) {

      var pos



    }

    




    return (
      <div className='sign-in'>


        <link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" />
        <link href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" rel="stylesheet" />

        

            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="input" id="inputLogin" class="form-control" name="departmentName" placeholder="Department Name" onChange={this.handleChange}  required autofocus />
                <label for="inputLogin">Department name</label>
              </div>

              <div class="form-label-group">
              
                <input type="password" id="inputLoginPass" class="form-control" name="passwordDepartment" placeholder="Password" onChange={this.handleChange}  required />
                <label for="inputLoginPass">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
              <label class="custom-control-label" for="customCheck1">Remember password</label>
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                
              </div>




            </form>

            <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.okVal}>Sign into Departament</button>
            <p></p>


          </div>

       

    );
  }
}

export default SignInDepartament;