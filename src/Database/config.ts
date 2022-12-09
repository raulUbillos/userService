import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

const datasource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: ['./src/Database/entities/*.ts'],
  migrations: ['./src/Database/migrations/*.ts'],
});

export default datasource;
