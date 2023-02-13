import { Sequelize } from "sequelize";
 
const db = new Sequelize('veiculos', 'root', '231401', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;