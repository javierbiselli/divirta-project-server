import express from 'express'
import controllers from '../controllers/salon'

const router = express.Router();

router
.post('/salon', controllers.createSalon)
.get('/salon', controllers.getSalons)
.get('/salon/:id', controllers.getSalonById)
.delete('/salon/:id', controllers.deleteSalon)
.put('/salon/:id', controllers.updateSalon)


export default router
