"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const user_route_js_1 = __importDefault(require("../routes/user.route.js"));
class Server {
    routes() {
        this.app.use(this.apiPaths.users, user_route_js_1.default);
    }
    constructor() {
        this.apiPaths = {
            users: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Definicion de rutas
        this.routes();
    }
    middlewares() {
        //Coors
        //Lecura del body
        //Carpeta publica
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map