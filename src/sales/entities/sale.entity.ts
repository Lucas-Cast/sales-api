import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../../sequelize';
import Client from '../../clients/entities/client.entity';
import Personnel from '../../personnel/entities/personnel.entity';

export interface SaleAttributes {
  id: number;
  totalValue: number;
  saleDate: Date;
}

class Sale extends Model<SaleAttributes> implements SaleAttributes {
  public id!: number;
  public totalValue!: number;
  public saleDate!: Date;
}

Sale.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    totalValue: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'vendas',
  },
);

Sale.belongsTo(Client, {
    foreignKey: 'clientId',
    onDelete: 'CASCADE',
})
Sale.belongsTo(Personnel, {
    foreignKey: 'personnelId',
    onDelete: 'CASCADE',
})

export default Sale;
