import express, { Application } from 'express';
import userRouter from '../routes/user.route.js';
import cors from 'cors';
import { sequelize } from '../db/connection.js';

export class Server {
    private app: Application
    private port: string
    private apiPaths = {
        users: '/api/users'
    }

    routes() {
        this.app.use(this.apiPaths.users, userRouter)
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'
        this.dbConnection();
        this.middlewares()
        this.routes()
    }

    // Todo: Conectar base de datos
    async dbConnection() {
        try {
            await sequelize.authenticate();
        } catch (error: any) {
            throw new Error(error)
        }
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}



