import express, { Application } from 'express';
import userRouter from '../routes/user.route.js';

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

        // Definicion de rutas
        this.routes()

    }

    middlewares() {
        //Coors

        //Lecura del body

        //Carpeta publica
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}



