import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class UserAddenumStore{
    
    constructor(){
        this.addenums = []
        this.emitter = new EventEmitter()
        
    }
    async getUserAddenums(userId, contractId){
        try{
           
            let response = await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/addenums`)
            let data = await response.json()
            this.addenums = data
            
            this.emitter.emit('GET_ADDENUM_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_ADDENUM_ERROR')
        }
    }
    
    async addUserAddenum(userId, contractId, addenum){
        try{
            
            
            await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/addenums`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addenum)
                
            })
            this.getUserAddenums(userId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_ADDENUM_ERROR")
        }
    }
    
        
    
    
}

export default UserAddenumStore