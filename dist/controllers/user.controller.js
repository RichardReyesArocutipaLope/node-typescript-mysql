"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    return res.json({
        msg: 'Get Users'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Get User',
        id
    });
};
exports.getUser = getUser;
const createUser = (req, res) => {
    // const { nombre } = req.body;
    console.log(req.body);
    res.json({
        msg: 'Create user',
        // nombre
    });
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'Update User',
        body,
        id
    });
};
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