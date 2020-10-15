import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class CompanyClientStore{
    
    constructor(){
        this.client = null
        this.emitter = new EventEmitter()
        
    }
    async getCompanyClient(userId,departmentId, contractId){
        try{
           
            let response = await fetch(`${SERVER}/company/${userId}/departments/${departmentId}/contracts/${contractId}/client`)
            let data = await response.json()
            this.client = data
            
            this.emitter.emit('GET_CLIENT_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_CLIENT_ERROR')
        }
    }
    
    async addCompanyClient(userId,departmentId, contractId, client){
        try{
            
            
            await fetch(`${SERVER}/company/${userId}/departments/${departmentId}/contracts/${contractId}/client`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(client)
                
            })
            this.getCompanyClient(userId,departmentId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_CLIENT_ERROR")
        }
    }
    
        
    
    
}

export default CompanyClientStore