import React, {Component} from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font, PDFDownloadLink,PDFViewer } from '@react-pdf/renderer';
import logo from '../Contract-Component/Asset.svg'
import UserParagraphStore from '../../../Stores/User/UserParagraphStore';
import UserClientStore from '../../../Stores/User/UserClientStore';
import AddAnnex from '../Add-Annex/add-annex';
import UserProviderStore from '../../../Stores/User/UserProviderStore';
import UserAddenumStore from '../../../Stores/User/UserAddenumStore';
import UserAnnexesStore from '../../../Stores/User/UserAnnexStore';
import AddAddenum from '../Add-Addenum/add-addenum';
import Alert from 'react-bootstrap/Alert'
import Paragraph from '../Paragraph/paragraph'
import Provider from '../Provider/provider';
import Client from '../Client/client';
// Create Document Component
class UpdateContract extends Component{
constructor(props){
    super(props)

    this.state = {
      paragraphs: [],
      annexes:[],
      addenums:[],
      clientData:null,
      providerData: null,
      isOk :false,
      cancel:false,
      selectedContract: null,
      goHome: false,
      createAddenum: false,
      createAnnex: false,
      goBack: false,
      addAnnexCancel: false,
      isLoading: false,
      load: false ,
      numberAnnexes:0,
      numberAddenums:0
    };

  
    this.store = new UserParagraphStore();
    this.store1 = new UserClientStore();
    this.store2 = new UserProviderStore();
    this.store3= new UserAddenumStore();
    this.store4 = new UserAnnexesStore();
    this.handleChange = (evt)=>{
        this.setState({
             [evt.target.name] : evt.target.value
        })
    }
    this.delete = (userId,contractId,paragraphId)=>{
        this.store.deleteParagraph(userId,contractId,paragraphId)
    }
    
    this.save = (userId,contractId,paragraphId, paragraph) =>{
        this.store.updateParagraph(userId,contractId,paragraphId, paragraph)
    }
    this.saveProvider = (userId,contractId,paragraphId, provider) =>{
        this.store2.updateProvider(userId,contractId,paragraphId, provider)
    }
    this.saveClient = (userId,contractId,paragraphId, client) =>{
        this.store1.updateClient(userId,contractId,paragraphId, client)
    }
    this.cancel=()=>{
        this.props.onCancel()
    }
}
async componentDidMount() {

 this.store.getUserParagraphs(this.props.userId, this.props.item.numberContract)
 
 
 this.store.emitter.addListener('GET_PARAGRAPHS_SUCCESS', ()=>{
   
     this.setState({
       paragraphs : this.store.paragraphs
     })
     
 })
 this.store2.getUserProvider(this.props.userId, this.props.item.numberContract)
 
 this.store2.emitter.addListener('GET_PROVIDER_SUCCESS', ()=>{
   

     this.setState({
       providerData : this.store2.provider
     })
     
 })


this.store1.getUserClient(this.props.userId, this.props.item.numberContract)
 this.store1.emitter.addListener('GET_CLIENT_SUCCESS', ()=>{
   
     this.setState({
       clientData : this.store1.client
     })
     
 })

 this.store3.getUserAddenums(this.props.userId, this.props.item.numberContract)
 
 this.store3.emitter.addListener('GET_ADDENUM_SUCCESS', ()=>{
   

     this.setState({
       addenums : this.store3.addenums
     })
     
 })

 this.store4.getUserAnnexes(this.props.userId, this.props.item.numberContract)
 
 this.store4.emitter.addListener('GET_ANNEX_SUCCESS', ()=>{
   

     this.setState({
       annexes : this.store4.annexes
     })
     
 })

 
}


   render(){

     

    
return( 
<div class="container"> 
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
         <a class="nav-link" href="#">Home
               <span class="sr-only">(current)</span>
             </a>
       </li>
       
       <li class="nav-item">
         <a class="nav-link" onClick={this.cancel}>Cancel</a>
       </li>
     </ul>
   </div>
 </div>
</nav>



{
                    this.state.paragraphs.map((e,i) => <Paragraph key={i} item={e} userId={this.props.userId} contractId={this.props.item.numberContract}  onSave={this.save}  />)
                    
                    }
                   { this.state.providerData && <Provider userId={this.props.userId} contractId={this.props.item.numberContract} value={this.state.providerData} onSave={this.saveProvider}></Provider>
   }
 { this.state.clientData && <Client userId={this.props.userId} contractId={this.props.item.numberContract} value={this.state.clientData} onSave={this.saveClient}></Client>
   }
    <button class="btn btn-primary btn-l js-scroll-trigger" onClick={this.cancel} >Finish</button>
 </div>
)
   }

}
export default UpdateContract