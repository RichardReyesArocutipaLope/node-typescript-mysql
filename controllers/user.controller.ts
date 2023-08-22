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

export const createUser = async (req: Request, res: Response) => {
    // TODO : obligar al usuario a que envie el name y el email
    // TODO : validar de que el email sea unico (modificar tambien en la tabla de postgresql)
    const { body } = req;
    try {
        const user = new User(body)
        await user.save()
        res.json({ user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const updateUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    const { email } = body;

    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ msg: 'No existe el usuario' })

        if (email) {
            const existsEmail = await User.findOne({ where: { email } })
            if (existsEmail) return res.status(400).json({
                msg: `Ya existe el email ${body.email}`
            })
        }
        await user.update(body)
        res.json({ user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}

export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'Delete User',
        id
    })
}