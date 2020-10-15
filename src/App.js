import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SignIn from './Components/User/Sign-In/sign-in'
import SignUp from './Components/User/Sign-Up/sign-up'
import SignUpCompany from './Components/Company/Sign-Up-Company/sign-up-company'
import SignInCompany from './Components/Company/Sign-In-Company/sign-in-company'
import ContractPage from './Components/User/Contract-Component/contracts-page';
import GDPR from './Components/User/GDPR/gdpr';
class App extends Component {

    constructor() {
        super();

        this.state = {


            signUp: false,
            signIn: false,
            signUpCompany: false,
            signInCompany: false,
            notLogged: false,
            okGDPR:false

        };

        this.ok = () =>{
            this.setState({
              okGDPR: !this.state.okGDPR
            })
          }
        this.signUp = () => {

            this.setState({
                signUp: !this.state.signUp
            })

        }

        this.notLogged = () => {

            this.setState({
                notLogged: !this.state.notLogged
            })

        }
        this.signIn = () => {
            this.setState({
                signIn: !this.state.signIn

            })
        }

        this.signUpCompany = () => {

            this.setState({
                signUpCompany: !this.state.signUpCompany
            })

        }

        this.signInCompany = () => {
            this.setState({
                signInCompany: !this.state.signInCompany

            })
        }


    }

    render() {

        if (this.state.signIn)
            return <SignIn></SignIn>

        if (this.state.signUp)
            return <SignUp></SignUp>

        if (this.state.signUpCompany)
            return <SignUpCompany></SignUpCompany>

        if (this.state.signInCompany)
            return <SignInCompany></SignInCompany>
        if (this.state.notLogged){
            if(this.state.okGDPR)
            return <ContractPage id={1}></ContractPage>
            else
            return (<div class="container"><GDPR></GDPR>
            <button type="checkbox" class="form-check-input" id="exampleCheck1" onClick={this.ok}>I consent</button>
            </div>)
            
            
            }
        return (
            <div className="App">






                <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div class="container">
                        <a class="navbar-brand js-scroll-trigger" href="#page-top">Kontract</a><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto my-2 my-lg-0">
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Sign in</a></li>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Create an account</a></li>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header class="masthead">
                    <div class="container h-100">
                        <div class="row h-100 align-items-center justify-content-center text-center">
                            <div class="col-lg-10 align-self-end">
                                <h1 class="text-uppercase text-white font-weight-bold">Kontract Document Manager</h1>
                                <hr class="divider my-4" />
                            </div>
                            <div class="col-lg-8 align-self-baseline">
                                <p class="text-white-75 font-weight-light mb-5">Contracts have never been this easy!</p>
                                <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                            </div>
                        </div>
                    </div>
                </header>

                <section class="page-section bg-primary" id="about">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 text-center">
                                <h2 class="text-white mt-0">We've got what you need!</h2>
                                <hr class="divider light my-4" />
                                <p class="text-white-50 mb-4">As a company, we know that managing contracts can be hard, but that's why we are here</p>
                                <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="page-section" id="services">
                    <div class="container">
                        <h2 class="text-center mt-0">Company Section</h2>
                        <hr class="divider my-2" />
                        <div class="row">
                            <div class="col-lg-6 col-md-6 text-center">
                                <div class="mt-5">

                                    <button class="btn btn-primary btn-xl js-scroll-trigger" type="button" onClick={this.signUpCompany}>Sign Up</button>
                                    <p></p>
                                    <p class="text-muted mb-0">Create your company account, and add your departaments that need managing</p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 text-center">
                                <div class="mt-5">

                                    <button class="btn btn-primary btn-xl js-scroll-trigger" type="button" onClick={this.signInCompany}>Sign In</button>
                                    <p></p>
                                    <p class="text-muted mb-0">Welcome back!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                <section class="page-section bg-dark text-white">
                    <div class="container text-center">
                        <h2 class="mb-4">Are you a user? Don't worry, we got you!</h2>
                        <div class="row">
                            <div class="col-lg-4 col-md-6 text-center">
                                <div class="mt-5">

                                    <button class="btn btn-light btn-xl js-scroll-trigger" type="button" onClick={this.signUp}>Sign Up</button>
                                    <p></p>
                                    <p class="text-white-50 mb-0">Create your account</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 text-center">
                                <div class="mt-5">

                                    <button class="btn btn-light btn-xl js-scroll-trigger" type="button" onClick={this.notLogged}>Continue without logging</button>
                                    <p></p>
                                    <p class="text-white-50 mb-0">Try out our functionalities, but without an account. You won't be able to create new templates</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 text-center">
                                <div class="mt-5">
                                    <button class="btn btn-light btn-xl js-scroll-trigger" type="button" onClick={this.signIn}>Sign In</button>
                                    <p></p>
                                    <p class="text-white-50 mb-0">Welcome back!</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </section>

                <section class="page-section" id="contact">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 text-center">
                                <h2 class="mt-0">Let's Get In Touch!</h2>
                                <hr class="divider my-4" />
                                <p class="text-muted mb-5">Ready to start your managing with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                                <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                                <div>0749068120</div>
                            </div>
                            <div class="col-lg-4 mr-auto text-center">
                                <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                                <a class="d-block" href="mailto:contact@yourwebsite.com">contact@kontract.com</a>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="bg-light py-5">
                    <div class="container"><div class="small text-center text-muted">Kontract - Ionita Vlad-Dragos</div></div>
                </footer>






            </div>
        );
    }
}


export default App;