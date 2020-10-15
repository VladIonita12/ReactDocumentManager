import React, { Component, useState } from 'react';
import App from '../../../App';
import GoogleLogin from 'react-google-login';
import Alert from 'react-bootstrap/Alert'
import './sign-up-company.css';
import axios from 'axios';
import CompanyStore from '../../../Stores/Company/CompanyStore';
import CreateDepartaments from '../Create-Departaments/create-departaments';
import GDPR from '../GDPR/gdpr'
const SERVER = 'http://3.14.246.83:8080'



class SignUpCompany extends Component {
  constructor() {
    super();

    this.state = {
      companyData: [],
      userName: '',
      passwordCompany: '',
      isOk: false,
      cancel: false,
      selectedFile: null,
      googleSign: null,
      nrAccounts: 0,
      okGDPR: false
    };
    this.store = new CompanyStore()

    this.ok = () =>{
      this.setState({
        okGDPR: !this.state.okGDPR
      })
    }
    this.add = () => {

      var ok = false
      for (var i = 0; i < this.store.companies.length; i++) {
        console.log(this.store.companies[i].userName)
        if (this.state.companyData[i].userName === this.state.userName) {
          console.log(this.state.companyData[i].userName)
          ok = true
        }
      }
      if (ok === false) {
        this.setState({
          nrAccounts: this.state.companyData.length
        })
        this.store.addCompany({
          userName: this.state.userName,
          passwordCompany: this.state.passwordCompany
        })


        this.setState({
          isOk: !this.state.isOk
        })

        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://3.14.246.83:8080/upload", data, {
          // receive two    parameter endpoint url ,form data
        })
          .then(res => { // then print response status
            console.log(res.statusText)
          })
      }
    }


    this.okVal = () => {

      this.setState({
        isOk: !this.state.isOk
      })

    }
    this.cancelApp = () => {
      this.setState({
        cancel: !this.state.cancel
      })
    }

    this.handleChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }

    this.onChangeHandler = event => {
      this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
      })
    }

  }
  async componentDidMount() {

    this.store.getCompanies()
    this.store.emitter.addListener('GET_COMP_SUCCESS', () => {
      this.setState({
        companyData: this.store.companies
      })
    })
  }

  render() {
    if (this.state.cancel)
      return <App></App>


    if (this.state.isOk && this.store.companies.length > this.state.nrAccounts) {



      return <CreateDepartaments id={this.state.companyData[this.state.companyData.length - 1].id}></CreateDepartaments>

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
                <h5 class="card-title text-center">Register company</h5>
                <form class="form-signin">

                  <div class="form-label-group">
                    <input type="email" id="inputEmail" name="userName" class="form-control" onChange={this.handleChange} placeholder="Email address" value={this.state.userName} required />
                    <label for="inputEmail">Email address</label>
                  </div>



                  <div class="form-label-group">
                    <input type="password" id="inputPassword" name="passwordCompany" class="form-control" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />
                    <label for="inputPassword">Password</label>
                  </div>

                  <div class="form-label-group">
                    <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required />
                    <label for="inputConfirmPassword">Confirm password</label>
                  </div>





                </form>
                <p></p>
                <input type="file" class="btn btn-lg btn-primary btn-block text-uppercase" name="file" onChange={this.onChangeHandler} />
                <p></p>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.add}>Register</button>
                <p></p>
                <button class="btn btn-lg btn-block text-uppercase" type="submit" onClick={this.cancelApp}> Cancel</button>
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


export default SignUpCompany