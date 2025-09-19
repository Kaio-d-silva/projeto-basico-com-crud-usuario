import { Model, DataTypes} from "sequelize";
import sequelize from "../database";

class Pedido extends Model {
    id!:number;
    cliente_nome!: string;
    cliente_endereco!: string;
    cliente_telefone!: string;
    prato_id!: string;
    quantidade!: number;
    total!: number;
    status!: "PENDENTE" | "EM_PREPARO" | "ENTREGUE"; 
}

Pedido.init(
    {
       id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
       },
       cliente_nome:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Cliente'
       },
       cliente_endereco:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Endereço do cliente'
       },
       cliente_telefone:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Telefone do cliente'
       },
       prato_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Pratos",
            key: "id"
        }
       },
       quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
       },
       total: {
        type: DataTypes.FLOAT,
        allowNull: false
       },
       status: {
        type: DataTypes.ENUM("PENDENTE","EM_PREPARO","ENTREGUE"),
        defaultValue: "PENDENTE",
        allowNull: false,
       },
    },
    {
        sequelize,
        modelName: "Pedido",
    }
);
export default Pedido
