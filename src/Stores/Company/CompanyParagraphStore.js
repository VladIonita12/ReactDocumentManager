import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class CompanyParagraphStore{
    
    constructor(){
        this.paragraphs = []
        this.emitter = new EventEmitter()
        
    }
    async getUserParagraphs(companyId, departmentId, contractId){
        try{
            let response = await fetch(`${SERVER}/company/${companyId}/departments/${departmentId}/contracts/${contractId}/paragraphs`)
            let data = await response.json()
            this.paragraphs = data
            this.emitter.emit('GET_PARAGRAPHS_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_PARAGRAPHS_ERROR')
        }
    }
    
    async addParagraph(companyId, departmentId, contractId, paragraph){
        try{
            
            
            await fetch(`${SERVER}/company/${companyId}/departments/${departmentId}/contracts/${contractId}/paragraphs`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paragraph)
                
            })
            this.getUserParagraphs(companyId, departmentId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_PARAGRAPH_ERROR")
        }
    }
    
    async updateParagraph(companyId, contractId, paragraphId, paragraph){
        try{
            
            
            await fetch(`${SERVER}/company/${companyId}/contracts/${contractId}/paragraphs/${paragraphId}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paragraph)
                
            })
            this.getUserParagraphs(companyId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("UPDATE_PAR_ERROR")
        }
    }
    
    
}

export default CompanyParagraphStore