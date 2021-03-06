import {EventEmitter} from 'fbemitter'
const SERVER = 'http://3.14.246.83:8080'

class UserParagraphStore{
    
    constructor(){
        this.paragraphs = []
        this.emitter = new EventEmitter()
        
    }
    async getUserParagraphs(userId, contractId){
        try{
            let response = await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/paragraphs`)
            let data = await response.json()
            this.paragraphs = data
            this.emitter.emit('GET_PARAGRAPHS_SUCCESS')
        }
        catch(err){
            console.log(err)
            this.emitter.emit('GET_PARAGRAPHS_ERROR')
        }
    }
    
    async addParagraph(userId, contractId, paragraph){
        try{
            
            
            await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/paragraphs`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paragraph)
                
            })
            this.getUserParagraphs(userId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("ADD_PARAGRAPH_ERROR")
        }
    }
    
    async updateParagraph(userId, contractId, paragraphId, paragraph){
        try{
            
            
            await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/paragraphs/${paragraphId}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paragraph)
                
            })
            this.getUserParagraphs(userId, contractId)
            
        }
        catch(err){
            console.warn(err)
            this.emitter.emit("UPDATE_PAR_ERROR")
        }
    }
    async deleteParagraph(userId, contractId, paragraphId){
        try{
           
           
           await fetch(`${SERVER}/userdata/${userId}/contracts/${contractId}/paragraphs/${paragraphId}`, {
               method: 'delete'
               
               
           })
           this.getUserParagraphs(userId, contractId)
           
       }
       catch(err){
           console.warn(err)
           this.emitter.emit("DELETE_PAR_ERROR")
       }
   }
    
}

export default UserParagraphStore