import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../../sequelize';

export interface PersonnelAttributes {
  id: number;
  name: string;
  position: string;
}

class Personnel
  extends Model<PersonnelAttributes>
  implements PersonnelAttributes
{
  public id!: number;
  public name!: string;
  public position!: string;
}

Personnel.init(
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
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'colaboradores',
  },
);

export default Personnel;
