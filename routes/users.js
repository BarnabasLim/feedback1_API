import express from 'express'
import {getUsers,getUser, addUser,deleteUser,updateUser} from '../controller/users.js'

const router =express.Router();

//get users route
router.get('/',getUsers);

//get user route
router.get('/:id',getUser);

//add user route
router.post('/',addUser);

//delete user router
router.delete('/:id',deleteUser);

//patch user router
router.patch('/:id',updateUser)
export default router;