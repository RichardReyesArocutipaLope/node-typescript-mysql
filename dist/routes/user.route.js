"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_js_1 = require("../controllers/user.controller.js");
const userRouter = (0, express_1.Router)();
userRouter.get("/", user_controller_js_1.getUsers);
userRouter.get('/:id', [], user_controller_js_1.getUser);
userRouter.post('/', [], user_controller_js_1.createUser);
userRouter.put('/:id', [], user_controller_js_1.updateUser);
userRouter.delete('/:id', [], user_controller_js_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=user.route.js.map