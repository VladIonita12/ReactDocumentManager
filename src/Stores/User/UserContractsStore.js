import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class UserContractsStore{
    
    constructor(){
        this.contracts = []
        this.emitter = new EventEmitter()
        
    }
    async getUserContracts(userId){
        try{
            let response = await fetch(`${SERVER}/userdata/${userId}/contracts`)
            let data = await response.json()
            this.contracts = data
            this.emitter.emit('GET_CONTRACTS_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_CONTRACTS_ERROR')
        }
    }
    
    async addContract(userId, contract){
        try{
            
            
            await fetch(`${SERVER}/userdata/${userId}/contracts`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contract)
                
            })
            this.getUserContracts(userId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_CONTRACTS_ERROR")
        }
    }
    
        
    
    
}

export default UserContractsStore