import {Model, DataTypes} from "sequelize"
import sequelize from "../database";

class Cliente extends Model{
    id!: number;
    nome!: string;
    endereco!: string;
    telefone!: string;
    userId!: number 
}

Cliente.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "Cliente"
    }
)