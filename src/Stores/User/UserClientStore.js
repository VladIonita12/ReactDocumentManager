import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class UserClientStore{
    
    constructor(){
        this.client = null
        this.emitter = new EventEmitter()
        
    }
    async getUserClient(userId, contractId){
        try{
           
            let response = await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/client`)
            let data = await response.json()
            this.client = data
            
            this.emitter.emit('GET_CLIENT_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_CLIENT_ERROR')
        }
    }
    
    async addUserClient(userId, contractId, client){
        try{
            
            
            await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/client`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(client)
                
            })
            this.getUserParagraphs(userId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_CLIENT_ERROR")
        }
    }
    
    async updateClient(userId, contractId, clientId, client){
        try{
            
            
            await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/client/${clientId}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(client)
                
            })
            this.getUserClient(userId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("UPDATE_PAR_ERROR")
        }
    }
    
    
}

export default UserClientStore