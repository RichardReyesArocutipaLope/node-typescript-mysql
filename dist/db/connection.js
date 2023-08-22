"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('node-typescript', 'postgres', '2018119033', {
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432
});
//# sourceMappingURL=connection.js.map