import { Request, Response } from "express";
import { User } from "../models/user.model";

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();
    return res.json({ users })
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ msg: 'No existe' })
    return res.json({ user })
}

export const createUser = (req: Request, res: Response) => {

    const { body } = req;

    try {
        // User
    } catch (error) {
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }


    res.json({
        msg: 'Create user',
        body
    })
}

export const updateUser = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'Update User',
        body,
        id
    })
}

export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'Delete User',
        id
    })
}