/* eslint-disable @typescript-eslint/no-var-requires */
// import { DataSource } from 'typeorm';
const dotenv = require('dotenv');
const { DataSource } = require('typeorm');

// Load environment variables from .env file
dotenv.config();

// Define your TypeORM DataSource configuration
const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/modules/**/*.entity{.ts,.js}'], // Adjust path based on your project structure
  migrations: ['dist/database/migrations/*{.ts,.js}'], // Adjust path based on your project structure
  extra: {
    validateConnection: false,
    trustServerCertificate: true,
  },
});

module.exports = dataSource;
