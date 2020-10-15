import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class DepartamentStore{
    
    constructor(){
        this.departaments = []
        this.emitter = new EventEmitter()
        
    }
    async getDepartaments(companyId){
        try{
            let response = await fetch(`${SERVER}/company/${companyId}/departments`)
            let data = await response.json()
            this.departaments = data
            this.emitter.emit('GET_DEP_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_DEP_ERROR')
        }
    }
    
    async addDepartament(companyId, departament){
        try{
            
            
            await fetch(`${SERVER}/company/${companyId}/departments`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(departament)
                
            })
            this.getDepartaments(companyId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_DEP_ERROR")
        }
    }
    
        
    
    
}

export default DepartamentStore