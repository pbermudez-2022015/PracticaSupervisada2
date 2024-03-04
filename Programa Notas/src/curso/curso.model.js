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

    Profesor: {
        type: Schema.Types.ObjectId,
        ref: 'name',
        required: true

    }
}, {
    versionKey: false

})

export default model('curso', cursoSchema)