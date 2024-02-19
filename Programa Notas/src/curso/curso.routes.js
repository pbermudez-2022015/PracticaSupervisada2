import express from 'express'
import { validateJwt, isAdmin } from '../middlewares/validate-jwt.js'
import { save } from '../curso/curso.controller.js'  
    
const api = express.Router();

api.post('/save', save)

export default api