import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('node-typescript', 'postgres', '2018119033', {
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432
});