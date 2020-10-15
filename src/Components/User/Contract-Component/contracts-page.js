import React, {Component, useState} from 'react';
import './contracts-page.css';
import logo from './Asset.svg'
import App from '../../../App';
import ContractCard from '../Contract-Card/contract-card';
import UserContractsStore from '../../../Stores/User/UserContractsStore'
import IndividualContract from '../Individual-Contract/individual-contract';
import AddContract from '../Add-Contract/add-contract';

const SERVER = 'http://18.224.45.22:8080'

class ContractPage extends Component{
    constructor(props){
        super(props)
        this.state = {
          contracts: [],
          isOk :false,
          cancel:false,
          selectedContract: null,
          goHome: false,
          createAddenum: false,
          createAnnex: false,
          goBack: false,
          cancelAdding: false,
          numberContracts:0
        };
        this.store = new UserContractsStore();
        this.cancelApp = ()=>{
            this.setState({
                cancel:!this.state.cancel
            })
        }

        this.select = (contract) =>{
          this.setState({
              selectedContract: contract
          })
      }
      this.cancel = ()  => {
        this.setState({
          selectedContract:null
        })
    }
    this.cancelAdding = () =>{
      this.setState({
        addContract: !this.state.addContract
      })
      this.store.getUserContracts(this.props.id)
        
      this.store.emitter.addListener('GET_CONTRACTS_SUCCESS', ()=>{
        
          this.setState({
              contracts : this.store.contracts,
              numberContracts: this.store.contracts.length
          })
          
      })
      
    }
    this.goBack = () =>{
      this.setState({
        goBack: !this.state.goBack
      })
    }

    this.addContract = () =>{
      this.setState({
        addContract: !this.state.addContract,
        numberContracts: this.state.numberContracts+1,
        cancelAdding:1
      })
    }

    }

    async componentDidMount() {

        this.store.getUserContracts(this.props.id)
        
        this.store.emitter.addListener('GET_CONTRACTS_SUCCESS', ()=>{
          
            this.setState({
                contracts : this.store.contracts,
                numberContracts: this.store.contracts.length
            })
            
        })
      }
render(){
  
    if(this.state.goBack){
       return <App></App>
    }
    if(this.state.selectedContract){
      return <IndividualContract item={this.state.selectedContract} user={this.props.id} onCancel={this.cancel}/>
  }
 
  if(this.state.addContract){
    
    return <AddContract id={this.props.id} contractId={this.state.numberContracts}  onCancel={this.cancelAdding}></AddContract>
  }


    return (
        <div className=' ContractPage'>
           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></script>
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
          <button class="nav-link btn btn-xl js-scroll-trigger" onClick={this.goBack}>Home
                
              </button>
        </li>
        { this.props.id!=1 && <li class="nav-item">
          <button class="nav-link btn btn-xl js-scroll-trigger"  onClick={this.addContract} href="#">Add contract</button>
        </li>}
        
        
        
      </ul>
    </div>
  </div>
</nav>
<div class="container">
<h1 class="my-4">Your contracts
   
  </h1>
</div>

<div className='card-list'>
{
                    this.state.contracts.map((e,i) => <ContractCard key={i} user={this.props.id} item={e} onSelect={this.select} />)
                    
                    }
       </div>
      </div>
     
    )
}

}

export default ContractPage