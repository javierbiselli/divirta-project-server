import express from 'express'
import salonsControllers from '../controllers/salon'

const router = express.Router();

router
.get('/', salonsControllers.getSalons)
.post('/', salonsControllers.createSalon)
.get('/:id', salonsControllers.getSalonById)
.delete('/:id', salonsControllers.deleteSalon)
.put('/:id', salonsControllers.updateSalon)


export default router
