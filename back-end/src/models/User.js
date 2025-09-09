import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { v4 as uuidv4 } from "uuid";

export default class User extends Model { }
User.init({
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        defaultValue: () => uuidv4() 
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
}, {
    sequelize,
    tableName: 'users',
    timestamps: false,

})