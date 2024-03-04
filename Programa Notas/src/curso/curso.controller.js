'use strict'
import Curso from './curso.model.js'


export const save = async (req, res) => {
    try {
        let data = req.body
        let curso = new Curso(data)
        await curso.save()
        return res.send({ message: 'I make a Curso' })
    } catch (err) {
        console.error.err
        return res.status(500).send({ message: 'Error Saving Curso' })
    }
}

export const update = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        if (!update) return res.status(400).send({ message: 'Have submitted some data that cannot be updated or missing data' })
        let updatedCurso = await Curso.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        );
        if (!updatedCurso) return res.status(401).send({ message: 'Curso not found' })
        return res.send({ message: 'Updated Curso', updatedCurso })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating Curso' })
    }
}

export const deleteA = async (req, res) => {
    try {
        let { id } = req.params
        let deletedCurso = await Curso.deleteOne({ _id: id })
        if (deletedCurso.deletedCurso === 0) return res.status(404).send({ message: 'Curso not found and not deleted' })
        return res.send({ message: 'Deleted Curso successfully' })
    } catch (err) {
        console.error(err)
        return res.status(404).send({ message: 'Error deleting Curso' })
    }
}

export const search = async (req, res) => {
    try {
        //Obtener el parámetro de búsqueda
        let { search } = req.body
        //Buscar
        let curso = await Curso.find(
            { name: search }
        ).populate(['name', 'phone'])
        //Validar la respuesta
        if (!curso) return res.status(404).send({ message: 'Curso not found' })
        //Responder si todo sale bien
        return res.send({ message: 'Curso found', curso })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error searching curso' })
    }
}