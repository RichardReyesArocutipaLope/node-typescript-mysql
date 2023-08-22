import { DataTypes } from 'sequelize';
import { sequelize } from '../db/connection';

export const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN
    },
})