import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
    return res.json({
        msg: 'Get Users'
    })
}


export const getUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'Get User',
        id
    })
}

export const createUser = (req: Request, res: Response) => {

    // const { nombre } = req.body;
    console.log(req.body)

    res.json({
        msg: 'Create user',
        // nombre
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