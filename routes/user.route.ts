import { Router } from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user.controller.js';


const userRouter = Router();

userRouter.get("/", getUsers)
userRouter.get('/:id', [], getUser)
userRouter.post('/', [], createUser)
userRouter.put('/:id', [], updateUser)
userRouter.delete('/:id', [], deleteUser)

export default userRouter