"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_model_1 = require("../models/user.model");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.User.findAll();
    return res.json({ users });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.User.findByPk(id);
    if (!user)
        return res.status(404).json({ msg: 'No existe' });
    return res.json({ user });
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO : obligar al usuario a que envie el name y el email
    // TODO : validar de que el email sea unico (modificar tambien en la tabla de postgresql)
    const { body } = req;
    try {
        const user = new user_model_1.User(body);
        yield user.save();
        res.json({ user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const { email } = body;
    try {
        const user = yield user_model_1.User.findByPk(id);
        if (!user)
            return res.status(404).json({ msg: 'No existe el usuario' });
        if (email) {
            const existsEmail = yield user_model_1.User.findOne({ where: { email } });
            if (existsEmail)
                return res.status(400).json({
                    msg: `Ya existe el email ${body.email}`
                });
        }
        yield user.update(body);
        res.json({ user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Delete User',
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map