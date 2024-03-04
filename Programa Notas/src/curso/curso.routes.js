'use strict'
import { Router } from 'express'
import { save, update, deleteA, search } from './curso.controller.js'
import { validateJwt } from '../middlewares/validate-jwt.js'

const api = Router()


//Rutas privadas - CLIENT
api.post('/save', [validateJwt], save)
api.put('/update/:id', [validateJwt], update)
api.delete('/delete/:id', [validateJwt], deleteA)
api.post('/search', [validateJwt], search)

export default api