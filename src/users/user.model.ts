import { DataTypes, Model } from 'sequelize';
import database from '../database';

export class User extends Model {
  declare id: number;
  declare name: string;
  declare username: string;
  declare password: string;
  declare role: string;
  declare enabled: boolean;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

User.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('ROLE_ADMIN', 'ROLE_USER'),
    allowNull: false,
    defaultValue: 'ROLE_USER',
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  sequelize: database,
  tableName: 'users',
});
