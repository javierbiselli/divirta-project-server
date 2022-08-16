import express from 'express'
import usersController from '../controllers/users'

const router = express.Router();

router
.get('/', usersController.getUsers)
.get('/:id', usersController.getUserById)
.delete('/:id', usersController.deleteUser)
.put('/:id', usersController.updateUser)


export default router