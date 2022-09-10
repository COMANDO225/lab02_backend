import { Sequelize } from "sequelize";

const db = new Sequelize("solnube_semana2", "root", "", {
    host: "localhost",
    dialect: "mysql",
    define:{
        freezeTableName: true,
    }
});

export default db;