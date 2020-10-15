import React,{Component} from 'react'
import Alert from 'react-bootstrap/Alert'
class Paragraph extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            isEditing : false,
            paragraphName : this.props.item.paragraphName,
            paragraphText: this.props.item.paragraphText
        }
        
        this.delete = () =>{
            this.props.onDelete(this.props.userId,this.props.contractId, this.props.e.id)
        }
        
        this.save= ()=>{
            this.props.onSave(this.props.userId,this.props.contractId, this.props.item.id,{
                paragraphText: this.state.paragraphText,
                paragraphName: this.state.paragraphName
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
        
            return (<div class="container">
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
                <p></p>
                <input type="text" class="form-control "  name="paragraphName" onChange={this.handleChange} value={this.state.paragraphName}/>
                <textarea type="textarea" rows="6" class="form-control text-area text-box multi-line "  name="paragraphText" onChange={this.handleChange} value={this.state.paragraphText}/>
                <p></p>
                <div>
                
                <button class="btn btn-primary btn-l js-scroll-trigger" onClick={this.save} >Save</button>
                {/* <input type="button"  value = "save" onClick={this.save}/>  */}
                </div>
                {this.state.isEditing && <Alert variant="success">Paragraph succesfully modified</Alert>}
                <p></p>
           </div>
        
        
            )
    }
    
}

export default Paragraph