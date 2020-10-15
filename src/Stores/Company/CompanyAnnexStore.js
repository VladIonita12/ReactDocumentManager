import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class CompanyAnnexStore{
    
    constructor(){
        this.annexes = []
        this.emitter = new EventEmitter()
        
    }
    async getCompanyAnnexes(userId,departmentId, contractId){
        try{
           
            let response = await fetch(`${SERVER}/company/${userId}/departments/${departmentId}/contracts/${contractId}/annexes`)
            let data = await response.json()
            this.addenums = data
            
            this.emitter.emit('GET_ANNEX_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_ANNEX_ERROR')
        }
    }
    
    async addCompanyAnnex(userId,departmentId, contractId, annex){
        try{
            
            
            await fetch(`${SERVER}/company/${userId}/departments/${departmentId}/contracts/${contractId}/addenums`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(annex)
                
            })
            this.getCompanyAnnexes(userId,departmentId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_ANNEX_ERROR")
        }
    }
    
        
    
    
}

export default CompanyAnnexStore