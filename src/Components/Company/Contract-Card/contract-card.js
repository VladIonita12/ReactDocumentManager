import React, {Component} from 'react';



import './contract-card.css';

class ContractCard extends Component{
    constructor(props){
        super(props)
        
        this.state = {
          
          isOk :false,
          cancel:false
        };

        this.select = () =>{
            this.props.onSelect(this.props.item)
            
        }
        this.cancelApp = ()=>{
            this.setState({
                cancel:!this.state.cancel
            })
        }
    }
    render(){
        let {item} = this.props
    
    return(

<div className='card-container'>
      <img
        alt='bus'
        src={`https://s3.amazonaws.com/mentoring.redesign/s3fs-public/parties-agree-contract.jpg`
         
    }
    height="200"
    width="250"
      />
      <h3> Contract name: {item.contractName} </h3>
      <p> Contract No. {item.numberContract} </p>
      <button class="btn btn-primary btn-xl js-scroll-trigger" type="button" onClick={this.select} >View More</button>
      
     
    </div>

    )

    
    
    }

}

export default ContractCard
