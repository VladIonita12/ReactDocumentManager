import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class UserProviderStore{
    
    constructor(){
        this.provider = null
        this.emitter = new EventEmitter()
        
    }
    async getUserProvider(userId, contractId){
        try{
            let response = await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/provider`)
            let data = await response.json()
            this.provider = data
            this.emitter.emit('GET_PROVIDER_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_PROVIDER_ERROR')
        }
    }
    
    async addUserProvider(userId, contractId, provider){
        try{
            
            
            await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/provider`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(provider)
                
            })
            this.getUserProvider(userId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_PROVIDER_ERROR")
        }
    }

    async updateProvider(userId, contractId, providerId, provider){
        try{
            
            
            await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/provider/${providerId}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(provider)
                
            })
            this.getUserProvider(userId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("UPDATE_PAR_ERROR")
        }
    }
    
        
    
    
}

export default UserProviderStore