import React,{Component} from 'react'
import Alert from 'react-bootstrap/Alert'
class Provider extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            isEditing : false,
            providerName: this.props.value.providerName,
            providerCountry:this.props.value.providerCountry,
            providerZIP:this.props.value.providerZIP,
            providerCIF:this.props.value.providerCIF,
            providerCI:this.props.value.providerCI,
            providerEmail:this.props.value.providerEmail,
            providerNumber:this.props.value.providerNumber,
            providerCNP:this.props.value.providerCNP,
            providerLocation:this.props.value.providerLocation,
            providerStreetName:this.props.value.providerStreetName,
            providerStreetNumber:this.props.value.providerStreetNumber,
            providerSector:this.props.value.providerSector,
            providerIBAN:this.props.value.providerIBAN,
            providerBank:this.props.value.providerBank,
            providerRepresentative:this.props.value.providerRepresentative,
            providerRepresentativeFunction:this.props.value.providerRepresentativeFunction
        }
        
        this.delete = () =>{
            this.props.onDelete(this.props.userId,this.props.contractId, this.props.value.id)
        }
        
        this.save= ()=>{
            this.props.onSave(this.props.userId,this.props.contractId, this.props.value.id,{
                
                    providerName: this.state.providerName,
                    providerCountry:this.state.providerCountry,
                    providerZIP:this.state.providerZIP,
                    providerCIF:this.state.providerCIF,
                    providerCI:this.state.providerCI,
                    providerEmail:this.state.providerEmail,
                    providerNumber:this.state.providerNumber,
                    providerCNP:this.state.providerCNP,
                    providerLocation:this.state.providerLocation,
                    providerStreetName:this.state.providerStreetName,
                    providerStreetNumber:this.state.providerStreetNumber,
                    providerSector:this.state.providerSector,
                    providerIBAN:this.state.providerIBAN,
                    providerBank:this.state.providerBank,
                    providerRepresentative:this.state.providerRepresentative,
                    providerRepresentativeFunction:this.state.providerRepresentativeFunction
                  })
            
            this.setState({
                isEditing:true
            })
        }
        
        
        
        
       
        
        
          this.handleChange = (evt)=>{
            this.setState({
                 [evt.target.name] : evt.target.value
            })
        }
        
    }
    
    render(){
        
        let {item} = this.props
        console.log(this.props.item)
            return (<div class="container">
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
                <p></p>
                <label htmlFor="providerName">Provider Name</label> 
        <input type="text" name="providerName" class="form-control" id="providerName" onChange={this.handleChange} value={this.state.providerName} />
       
        <label htmlFor="providerCNP">Provider Identification Number</label> 
        <input type="text" name="providerCNP" class="form-control" id="providerCNP" onChange={this.handleChange} value={this.state.providerCNP} />
       
        <label htmlFor="providerCI">Provider Identity Card Series and Number</label> 
        <input type="text" name="providerCI" class="form-control" id="providerCI" onChange={this.handleChange} value={this.state.providerCI} />
       

        <label htmlFor="providerCountry">Provider Country</label> 
        <input type="text" name="providerCountry" class="form-control" id="providerCountry" onChange={this.handleChange} value={this.state.providerCountry} />
       
        <label htmlFor="providerLocation">Provider City</label> 
        <input type="text" name="providerLocation" class="form-control" id="contractDate" onChange={this.handleChange} value={this.state.providerLocation} />
       

        <label htmlFor="providerStreetName">Provider Address Street</label> 
        <input type="text" name="providerStreetName" class="form-control" id="providerStreetName" onChange={this.handleChange} value={this.state.providerStreetName} />
       
        <label htmlFor="providerStreetNumber">Provider Address Number</label> 
        <input type="number" name="providerStreetNumber" class="form-control" id="providerStreetNumber" onChange={this.handleChange} value={this.state.providerStreetNumber} />
       
        <label htmlFor="providerZIP">Provider ZIP Code</label> 
        <input type="text" name="providerZIP" class="form-control" id="providerZIP" onChange={this.handleChange} value={this.state.providerZIP} />
       
        <label htmlFor="providerSector">Provider Sector/State</label> 
        <input type="text" name="providerSector" class="form-control" id="providerSector" onChange={this.handleChange} value={this.state.providerSector} />
        

        
        <label htmlFor="providerEmail">Provider Email</label> 
        <input type="text" name="providerEmail" class="form-control" id="providerEmail" onChange={this.handleChange} value={this.state.providerEmail} />
       
        <label htmlFor="providerNumber">Provider Phone Number</label> 
        <input type="text" name="providerNumber" class="form-control" id="providerNumber" onChange={this.handleChange} value={this.state.providerNumber} />
        
        <label htmlFor="providerCIF">Provider CIF</label> 
        <input type="text" name="providerCIF" class="form-control" id="providerCIF" onChange={this.handleChange} value={this.state.providerCIF} />
        
        <label htmlFor="providerIBAN">Provider IBAN</label> 
        <input type="text" name="providerIBAN" class="form-control" id="providerIBAN" onChange={this.handleChange} value={this.state.providerIBAN} />
        
        <label htmlFor="providerBank">Provider Bank</label> 
        <input type="text" name="providerBank" class="form-control" id="providerBank" onChange={this.handleChange} value={this.state.providerBank} />
        
        <label htmlFor="providerRepresentative">Provider Representative</label> 
        <input type="text" name="providerRepresentative" class="form-control" id="providerRepresentative" onChange={this.handleChange} value={this.state.providerRepresentative} />
        
        <label htmlFor="providerRepresentativeFunction">Provider Representative Function</label> 
        <input type="text" name="providerRepresentativeFunction" class="form-control" id="providerRepresentativeFunction" onChange={this.handleChange} value={this.state.providerRepresentativeFunction} />
        
        <p/>  <p></p>
                <div>
                
                <button class="btn btn-primary btn-l js-scroll-trigger" onClick={this.save} >Save</button>
                
                {/* <input type="button"  value = "save" onClick={this.save}/>  */}
                </div>
                {this.state.isEditing && <Alert variant="success">Provider succesfully modified</Alert>}
                <p></p>
           </div>
        
        
            )
    }
    
}

export default Provider