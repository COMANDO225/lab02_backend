import { Sequelize } from "sequelize";

// const db = new Sequelize("solnube_semana2", "root", "", {
//     host: "localhost",
//     dialect: "mysql",
//     define:{
//         freezeTableName: true,
//     }
// });
const db = new Sequelize("jbta7idru2ruo55m", "vtduv5wmn83dy4gi", "keadazn3ftowq5ms", {
    host: "migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    define:{
        freezeTableName: true,
    }
});

export default db;