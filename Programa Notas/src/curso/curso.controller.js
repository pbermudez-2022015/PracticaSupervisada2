'use strict'
import { checkUpdate } from '../utils/validator.js'
import Curso from './curso.model'
import User from '../user/user.model.js'


export const save = async (req, res)=>{
    try {
        let data = req.body

        let user = await User.findOne({_id:data.keeper})

        if(!user) return res.status(404).send({message: 'Keeper not found'})

        //creo instancia de Curso
        let curso = new Curso(data)

        await curso.save()

        return res.send({ message: `Registed succesfully, can be llogged`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error load curso'})
    }
}