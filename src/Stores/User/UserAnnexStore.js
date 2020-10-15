import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class UserAnnexesStore{
    
    constructor(){
        this.annexes = []
        this.emitter = new EventEmitter()
        
    }
    async getUserAnnexes(userId, contractId){
        try{
           
            let response = await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/annexes`)
            let data = await response.json()
            this.annexes = data
            
            this.emitter.emit('GET_ANNEX_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_ANNEX_ERROR')
        }
    }
    
    async addUserAnnex(userId, contractId, annex){
        try{
            
            
            await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/annexes`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(annex)
                
            })
            this.getUserAnnexes(userId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_ANNEX_ERROR")
        }
    }
    
        
    
    
}

export default UserAnnexesStore