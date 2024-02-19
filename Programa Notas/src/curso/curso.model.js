import { Schema, model } from 'mongoose';

const cursoSchema = Schema({
    namecurso: {
        type: String,
        required: true
    },

     descripcion: {
        type: String,
        required: true
    }, 
    
    keeper: {
        type: Schema.Types.ObjectId,
        ref: 'name',
        required: true
        
    }
}, { 
        versionKey: false 
    
})

export default model('curso', cursoSchema)