import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class CompanyProviderStore{
    
    constructor(){
        this.provider = null
        this.emitter = new EventEmitter()
        
    }
    async getCompanyProvider(companyId, departamentId, contractId){
        try{
            let response = await fetch(`${SERVER}/company/${companyId}/departments/${departamentId}/contracts/${contractId}/provider`)
            let data = await response.json()
            this.provider = data
            this.emitter.emit('GET_PROVIDER_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_PROVIDER_ERROR')
        }
    }
    
    async addUserProvider(companyId, departamentId,contractId, provider){
        try{
            
            
            await fetch(`${SERVER}/company/${companyId}/departments/${departamentId}/contracts/${contractId}/provider`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(provider)
                
            })
            this.getCompanyProvider(companyId,departamentId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_PROVIDER_ERROR")
        }
    }
    
        
    
    
}

export default CompanyProviderStore