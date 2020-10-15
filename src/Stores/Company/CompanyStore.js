import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class CompanyStore{
    
    constructor(){
        this.companies = []
        this.emitter = new EventEmitter()
        
    }
    async getCompanies(){
        try{
            let response = await fetch(`${SERVER}/company`)
            let data = await response.json()
            this.companies = data
            this.emitter.emit('GET_COMP_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_COMP_ERROR')
        }
    }
    
    async addCompany(company){
        try{
            
            
            await fetch(`${SERVER}/company`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(company)
                
            })
            this.getCompanies()
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_COMP_ERROR")
        }
    }
    
    async deleteCompany(id){
         try{
            
            
            await fetch(`${SERVER}/company/${id}`, {
                method: 'delete'
                
                
            })
            this.getCompanies()
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("DELETE_COMP_ERROR")
        }
    }
    
    async updateCompany(id, company){
        try{
            
            
            await fetch(`${SERVER}/company/${id}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(company)
                
            })
            this.getCompanies()
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("UPDATE_COMP_ERROR")
        }
    }
    
}

export default CompanyStore