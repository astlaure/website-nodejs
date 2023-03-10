import { Options, Sequelize } from 'sequelize';

export const databaseConfig: { [env: string]: Options } = {
  test: {
    storage: ':memory:',
    dialect: 'sqlite',
  },
  development: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: 'mysql',
  },
  production: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: 'mysql',
  },
}

export default new Sequelize(
  databaseConfig[process.env.NODE_ENV || 'development'],
);
