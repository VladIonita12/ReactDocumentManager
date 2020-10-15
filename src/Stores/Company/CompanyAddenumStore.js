import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class CompanyAddenumStore{
    
    constructor(){
        this.addenums = []
        this.emitter = new EventEmitter()
        
    }
    async getCompanyAddenums(userId,departmentId, contractId){
        try{
           
            let response = await fetch(`${SERVER}/company/${userId}/departments/${departmentId}/contracts/${contractId}/addenums`)
            let data = await response.json()
            this.addenums = data
            
            this.emitter.emit('GET_ADDENUM_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_ADDENUM_ERROR')
        }
    }
    
    async addCompanyAddenum(userId,departmentId, contractId, addenum){
        try{
            
            
            await fetch(`${SERVER}/company/${userId}/departments/${departmentId}/contracts/${contractId}/addenums`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addenum)
                
            })
            this.getCompanyAddenums(userId,departmentId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_ADDENUM_ERROR")
        }
    }
    
        
    
    
}

export default CompanyAddenumStore