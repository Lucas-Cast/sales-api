import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../../sequelize';

export interface ClientAttributes {
  id: number;
  name: string;
  phone: string;
  lastPurchase: Date;
}

class Client extends Model<ClientAttributes> implements ClientAttributes {
  public id!: number;
  public name!: string;
  public phone!: string;
  public lastPurchase!: Date;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastPurchase: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'clientes',
  },
);

export default Client;
