// importamos la conexion a la base de datos 
import db from '../database/db.js';

// importamos dataTypes de sequelize
import { DataTypes } from 'sequelize';

const AgendaModel = db.define('agenda', {
    nombre: { type: DataTypes.STRING },
    celular: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
})

export default AgendaModel;