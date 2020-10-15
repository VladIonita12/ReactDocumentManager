import React,{Component} from 'react'
import Alert from 'react-bootstrap/Alert'
class Client extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            isEditing : false,
            clientName: this.props.value.clientName,
            clientCountry:this.props.value.clientCountry,
            clientZIP:this.props.value.clientZIP,
            clientCIF:this.props.value.clientCIF,
            clientCI:this.props.value.clientCI,
            clientEmail:this.props.value.clientEmail,
            clientNumber:this.props.value.clientNumber,
            clientCNP:this.props.value.clientCNP,
            clientLocation:this.props.value.clientLocation,
            clientStreetName:this.props.value.clientStreetName,
            clientStreetNumber:this.props.value.clientStreetNumber,
            clientSector:this.props.value.clientSector,
            clientIBAN:this.props.value.clientIBAN,
            clientBank:this.props.value.clientBank,
            clientRepresentative:this.props.value.clientRepresentative,
            clientRepresentativeFunction:this.props.value.clientRepresentativeFunction
        }
        
        this.delete = () =>{
            this.props.onDelete(this.props.userId,this.props.contractId, this.props.value.id)
        }
        
        this.save= ()=>{
            this.props.onSave(this.props.userId,this.props.contractId, this.props.value.id,{
                
                    clientName: this.state.clientName,
                    clientCountry:this.state.clientCountry,
                    clientZIP:this.state.clientZIP,
                    clientCIF:this.state.clientCIF,
                    clientCI:this.state.clientCI,
                    clientEmail:this.state.clientEmail,
                    clientNumber:this.state.clientNumber,
                    clientCNP:this.state.clientCNP,
                    clientLocation:this.state.clientLocation,
                    clientStreetName:this.state.clientStreetName,
                    clientStreetNumber:this.state.clientStreetNumber,
                    clientSector:this.state.clientSector,
                    clientIBAN:this.state.clientIBAN,
                    clientBank:this.state.clientBank,
                    clientRepresentative:this.state.clientRepresentative,
                    clientRepresentativeFunction:this.state.clientRepresentativeFunction
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
                <label htmlFor="clientName">Client Name</label> 
        <input type="text" name="clientName" class="form-control" id="clientName" onChange={this.handleChange} value={this.state.clientName} />
       
        <label htmlFor="clientCNP">Client Identification Number</label> 
        <input type="text" name="clientCNP" class="form-control" id="clientCNP" onChange={this.handleChange} value={this.state.clientCNP} />
       
        <label htmlFor="clientCI">Client Identity Card Series and Number</label> 
        <input type="text" name="clientCI" class="form-control" id="clientCI" onChange={this.handleChange} value={this.state.clientCI} />
       

        <label htmlFor="clientCountry">Client Country</label> 
        <input type="text" name="clientCountry" class="form-control" id="clientCountry" onChange={this.handleChange} value={this.state.clientCountry} />
       
        <label htmlFor="clientLocation">Client City</label> 
        <input type="text" name="clientLocation" class="form-control" id="contractDate" onChange={this.handleChange} value={this.state.clientLocation} />
       

        <label htmlFor="clientStreetName">Client Address Street</label> 
        <input type="text" name="clientStreetName" class="form-control" id="clientStreetName" onChange={this.handleChange} value={this.state.clientStreetName} />
       
        <label htmlFor="clientStreetNumber">Client Address Number</label> 
        <input type="number" name="clientStreetNumber" class="form-control" id="clientStreetNumber" onChange={this.handleChange} value={this.state.clientStreetNumber} />
       
        <label htmlFor="clientZIP">Client ZIP Code</label> 
        <input type="text" name="clientZIP" class="form-control" id="clientZIP" onChange={this.handleChange} value={this.state.clientZIP} />
       
        <label htmlFor="clientSector">Client Sector/State</label> 
        <input type="text" name="clientSector" class="form-control" id="clientSector" onChange={this.handleChange} value={this.state.clientSector} />
        

        
        <label htmlFor="clientEmail">Client Email</label> 
        <input type="text" name="clientEmail" class="form-control" id="clientEmail" onChange={this.handleChange} value={this.state.clientEmail} />
       
        <label htmlFor="clientNumber">Client Phone Number</label> 
        <input type="text" name="clientNumber" class="form-control" id="clientNumber" onChange={this.handleChange} value={this.state.clientNumber} />
        
        <label htmlFor="clientCIF">Client CIF</label> 
        <input type="text" name="clientCIF" class="form-control" id="clientCIF" onChange={this.handleChange} value={this.state.clientCIF} />
        
        <label htmlFor="clientIBAN">Client IBAN</label> 
        <input type="text" name="clientIBAN" class="form-control" id="clientIBAN" onChange={this.handleChange} value={this.state.clientIBAN} />
        
        <label htmlFor="clientBank">Client Bank</label> 
        <input type="text" name="clientBank" class="form-control" id="clientBank" onChange={this.handleChange} value={this.state.clientBank} />
        
        <label htmlFor="clientRepresentative">Client Representative</label> 
        <input type="text" name="clientRepresentative" class="form-control" id="clientRepresentative" onChange={this.handleChange} value={this.state.clientRepresentative} />
        
        <label htmlFor="clientRepresentativeFunction">Client Representative Function</label> 
        <input type="text" name="clientRepresentativeFunction" class="form-control" id="clientRepresentativeFunction" onChange={this.handleChange} value={this.state.clientRepresentativeFunction} />
        
        <p/>  <p></p>
                <div>
                
                <button class="btn btn-primary btn-l js-scroll-trigger" onClick={this.save} >Save</button>
                
                {/* <input type="button"  value = "save" onClick={this.save}/>  */}
                </div>
                {this.state.isEditing && <Alert variant="success">Client succesfully modified</Alert>}
                <p></p>
           </div>
        
        
            )
    }
    
}

export default Client