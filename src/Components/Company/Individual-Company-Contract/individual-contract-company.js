import React, {Component} from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font, PDFDownloadLink,PDFViewer } from '@react-pdf/renderer';
import logo from '../Company-Contracts/Asset.svg'
import UserParagraphStore from '../../../Stores/User/UserParagraphStore';
import UserClientStore from '../../../Stores/User/UserClientStore';
import UserProviderStore from '../../../Stores/User/UserProviderStore';
import CompanyParagraphStore from '../../../Stores/Company/CompanyParagraphStore';
import CompanyClientStore from '../../../Stores/Company/CompanyClientStore';
import CompanyProviderStore from '../../../Stores/Company/CompanyProviderStore';
import CompanyAnnexStore from '../../../Stores/Company/CompanyAnnexStore';
import CompanyAddenumStore from '../../../Stores/Company/CompanyAddenumStore';
import AddCompanyAddenum from '../Add-Addenum-Company/add-addenum-company'
import AddCompanyAnnex from '../Add-Annex-Company/add-annex-company'

// Create Document Component
class IndividualCompanyContract extends Component{
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
      numberAddenums:0,
      update: false
    };

  
    this.store = new CompanyParagraphStore();
    this.store1 = new CompanyClientStore();
    this.store2 = new CompanyProviderStore();
    this.store3= new CompanyAddenumStore();
    this.store4 = new CompanyAnnexStore();
    this.cancel = () =>{
      this.props.onCancel()
  }

  this.cancelAddingAnnex = () =>{
    
    this.store4.getCompanyAnnexes(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
    this.setState({
      annexes : this.store4.annexes
    })
      this.setState({
      
        createAnnex:!this.state.createAnnex
    })
      
    this.store4.getCompanyAnnexes(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
    this.setState({
      annexes : this.store4.annexes
    })
    this.store3.getCompanyAddenums(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
    this.setState({
      addenums : this.store3.addenums
    })
  }
    this.cancelAdding = () =>{
      
      this.store3.getCompanyAddenums(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
      this.setState({
        addenums : this.store3.addenums
      })
      
      this.setState({
        createAddenum: !this.state.createAddenum
      })
      
      this.store3.getCompanyAddenums(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
      this.setState({
        addenums : this.store3.addenums
      })
      
       
    this.store4.getCompanyAnnexes(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
    this.setState({
      annexes : this.store4.annexes
    })
    }
  
    this.cancelUpdating = () =>{

      this.store.getUserParagraphs(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
      
      this.setState({
        paragraphs : this.store.paragraphs
      })
      this.store.getUserParagraphs(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
      
      this.setState({
        paragraphs : this.store.paragraphs
      })
  
  this.store2.getCompanyProvider(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
  
  
      this.setState({
        providerData : this.store2.provider
      })
      
      this.store2.getCompanyProvider(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
  
  
      this.setState({
        providerData : this.store2.provider
      })




      this.setState({
        update: !this.state.update
      })


      this.store.getUserParagraphs(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
      
      this.setState({
        paragraphs : this.store.paragraphs
      })
      
      this.store2.getCompanyProvider(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
  
  
      this.setState({
        providerData : this.store2.provider
      })
  
      this.store1.getCompanyClient(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
  
    
      this.setState({
        clientData : this.store1.client
      })
  


this.store1.getCompanyClient(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
  
    
      this.setState({
        clientData : this.store1.client
      })
      

    }

  this.handleChange = (evt)=>{
    this.setState({
         [evt.target.name] : evt.target.value
    })
}
  this.addAddenum = () =>{
    this.setState({
      createAddenum:!this.state.createAddenum
    })
  }

  this.addAnnex = () =>{
    this.setState({
      createAnnex:!this.state.createAnnex
    })
  }
  this.updateContract = () =>{
    this.setState({
      update:!this.state.update
    })
  }

}
 async componentDidMount() {
  this.setState({ isLoading: true });
  
  this.store.getUserParagraphs(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
  
  
  this.store.emitter.addListener('GET_PARAGRAPHS_SUCCESS', ()=>{
    
      this.setState({
        paragraphs : this.store.paragraphs
      })
      
  })
  this.store2.getCompanyProvider(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
  
  this.store2.emitter.addListener('GET_PROVIDER_SUCCESS', ()=>{
    

      this.setState({
        providerData : this.store2.provider
      })
      
  })


this.store1.getCompanyClient(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
  this.store1.emitter.addListener('GET_CLIENT_SUCCESS', ()=>{
    
      this.setState({
        clientData : this.store1.client
      })
      
  })

  this.store3.getCompanyAddenums(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
  
  this.store3.emitter.addListener('GET_ADDENUM_SUCCESS', ()=>{
    

      this.setState({
        addenums : this.store3.addenums
      })
      
  })

  this.store4.getCompanyAnnexes(this.props.idCompany,this.props.idDepartment, this.props.item.numberContract) 
  
  this.store4.emitter.addListener('GET_ANNEX_SUCCESS', ()=>{
    

      this.setState({
        annexes : this.store4.annexes
      })
      
  })


  window.setTimeout(this.setStartLoading.bind(this), 1000)

}
setStartLoading () { this.setState({ load: true }) }

    render(){

    
        Font.register({
            family: 'Anonymous Pro',
            src: 'http://themes.googleusercontent.com/static/fonts/anonymouspro/v3/Zhfjj_gat3waL4JSju74E-V_5zh5b-_HiooIRUBwn1A.ttf',
          
          });
          
          const styles = StyleSheet.create({
            body: {
              paddingTop: 35,
              paddingBottom: 65,
              paddingHorizontal: 35,
            },
            title: {
              fontSize: 15,
              textAlign: 'center',
              fontFamily: 'Anonymous Pro'
            },
            author: {
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 40,
            },
            subtitle: {
              fontSize: 10,
              margin: 12,
              fontFamily: 'Anonymous Pro'
            },
            text: {
              margin: 11,
              fontSize: 8,
              textAlign: 'justify',
              fontFamily: 'Anonymous Pro'
            },
            image: {
              marginVertical: 15,
              marginHorizontal: 100,
            },
            header: {
              fontSize: 12,
              marginBottom: 20,
              textAlign: 'center',
              color: 'grey',
            },
            pageNumber: {
              position: 'absolute',
              fontSize: 12,
              bottom: 30,
              left: 0,
              right: 0,
              textAlign: 'center',
              color: 'grey',
            },
          });
         
          
          if (!this.state.load) { return null }

          if(this.state.createAnnex){
            return <AddCompanyAnnex idCompany={this.props.idCompany} idDepartment={this.props.idDepartment}  contractId={this.props.item.numberContract} onCancel={this.cancelAddingAnnex}></AddCompanyAnnex>
          }

          if(this.state.createAddenum){
            return <AddCompanyAddenum idCompany={this.props.idCompany} idDepartment={this.props.idDepartment} contractId={this.props.item.numberContract} onCancel={this.cancelAdding}></AddCompanyAddenum>
          }
          

        
return( 
<div>
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
          <a class="nav-link" href="#" >Update contract</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={this.addAddenum}>Create addenum</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={this.addAnnex}>Create annex</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={this.cancel}>Cancel</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



{(!this.state.clientData || !this.state.providerData) && <p>Missing information</p>}
   { (this.state.clientData || this.state.providerData) && <PDFViewer width={1500} height={650}>
<Document>
    <Page size="A4" style={styles.body}>
    <Text style={styles.title}> {this.props.item.contractName}</Text>
  
   
    <Text style={styles.text}>
    (1) PERSOANA CARE ÎNSTRĂINEAZĂ: Subsemnat(ul)/(a)/Subscrisa {this.state.clientData.clientName} cu
domiciliul/sediul în {this.state.clientData.clientCountry}, județul {this.state.clientData.clientLocation}, codul poștal {this.state.clientData.clientZIP}, municipiul/orașul/comuna {this.state.clientData.clientLocation}, satul/sectorul {this.state.clientData.clientSector}, str. {this.state.clientData.clientStreetName},
nr. {this.state.clientData.clientStreetNumber}, identificat prin B.I./C.I./C.I.P./Pașaport seria {this.state.clientData.clientCI.substring(0,2)} nr {this.state.clientData.clientCI.substring(2,this.state.clientData.clientCI.length)} C.N.P./C.I.F.
{this.state.clientData.clientCNP} tel./fax: {this.state.clientData.clientNumber} e-mail: {this.state.clientData.clientEmail} 
      </Text>
      <Text style={styles.text}>
    (2) PERSOANA CARE DOBANDESTE: Subsemnat(ul)/(a)/Subscrisa {this.state.providerData.providerName} cu
domiciliul/sediul în {this.state.providerData.providerCountry}, județul {this.state.providerData.providerLocation}, codul poștal {this.state.providerData.providerZIP}, municipiul/orașul/comuna {this.state.providerData.providerLocation}, satul/sectorul {this.state.providerData.providerSector}, str. {this.state.providerData.providerStreetName},
nr. {this.state.providerData.providerStreetNumber}, identificat prin B.I./C.I./C.I.P./Pașaport seria {this.state.providerData.providerCI.substring(0,2)} nr {this.state.providerData.providerCI.substring(2,this.state.providerData.providerCI.length)} C.N.P./C.I.F.
{this.state.providerData.providerCNP} tel./fax: {this.state.providerData.providerNumber} e-mail: {this.state.providerData.providerEmail}
      </Text>
      
      {
      
      this.state.paragraphs.map((e,i) => 
     
      <View style={styles.text} key={i} item={e} onSelect={this.select}>

<Text style={styles.subtitle}  item={e} onSelect={this.select} >{e.paragraphName}</Text>
<Text style={styles.text} item={e} onSelect={this.select} >{e.paragraphText}</Text>
      </View>
      
      
      
    
      )
      
      }
      
<Text style={styles.text}> Valoarea contractului: {this.props.item.valueOfContract}</Text>
      
      
      
      <Text style={styles.text}>
      Data și locul încheierii actului: {this.props.item.contractDate.substring(0,10)} / Kontract Managing System
      </Text>
      <Text style={styles.text}>
      Semnătura persoanei care înstrăinează:                     Semnătura persoanei care dobândește: 
      </Text>
      <Text style={styles.text}>
           ........................                                  ..............................
      </Text>
      
      <Text style={styles.text}>
      
      </Text>
           
    </Page>
  
  {this.state.addenums && 
    <Page size="A4" style={styles.body}>
    <Text style={styles.title}> ADDENUMS</Text>
    <Text style={styles.title}> {this.props.item.contractName}</Text>
  
     
      
      {
      
      this.state.addenums.map((e,i) => 
     
      
      <Text style={styles.text} key={i} item={e} onSelect={this.select} >{e.addenumText}</Text>
      )
      
      }
        
      
           
        </Page>
  }
  {
    this.state.annexes && 
    <Page size="A4" style={styles.body}>
    <Text style={styles.title}> ANNEXES</Text>
    <Text style={styles.title}> {this.props.item.contractName}</Text>
  
     
      
      {
      
      this.state.annexes.map((e,i) => 
     
      
      <Text style={styles.text} key={i} item={e} onSelect={this.select} >{e.annexText}</Text>
      )
      
      }
        
      
           
        </Page>
  
  }
  </Document>
  </PDFViewer>}
  
  
  </div>
)
    }
 
}
export default IndividualCompanyContract