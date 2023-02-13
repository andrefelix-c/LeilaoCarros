import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Car = db.define('veiculos',{
    marca:{
        type: DataTypes.STRING
    },
    ano:{
        type: DataTypes.STRING
    },
    km:{
        type: DataTypes.STRING
    },
    valor_atual:{
        type: DataTypes.STRING
    },
    valor_fipe:{
        type: DataTypes.STRING
    },
    tipo:{
        type: DataTypes.STRING
    },
    cor:{
        type: DataTypes.STRING
    },
    combustivel:{
        type: DataTypes.STRING
    },
    localizacao:{
        type: DataTypes.STRING
    },
    situacao:{
        type: DataTypes.STRING
    },
    comitente:{
        type: DataTypes.STRING
    }
},
{
    timestamps: false
},
{
    freezeTableName: true
});
 
export default Car;