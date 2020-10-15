import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class CompanyContractsStore{
    
    constructor(){
        this.contracts = []
        this.emitter = new EventEmitter()
        
    }
    async getCompanyContracts(companyId, departamentId){
        try{
            let response = await fetch(`${SERVER}/company/${companyId}/departments/${departamentId}/contracts`)
            let data = await response.json()
            this.contracts = data
            this.emitter.emit('GET_CONTRACTS_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_CONTRACTS_ERROR')
        }
    }
    
    async addContract(companyId,departamentId, contract){
        try{
            
            
            await fetch(`${SERVER}/company/${companyId}/departments/${departamentId}/contracts`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contract)
                
            })
            this.getCompanyContracts(companyId, departamentId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_CONTRACTS_ERROR")
        }
    }
    
        
    
    
}

export default CompanyContractsStore