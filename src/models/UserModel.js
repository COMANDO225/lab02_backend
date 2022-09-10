import db from '../database/db';

import { DataTypes } from 'sequelize';

const UserModel = db.define('user', {
    nombre: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    refresh_token: { type: DataTypes.TEXT },
})

export default UserModel;