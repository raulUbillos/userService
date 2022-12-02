import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from './entities/user.model';
import { Roles } from './entities/roles.model';
import { RolesUser } from './entities/roles_user.model';
import { createDatabase1669941852541 } from './migrations/1669941852541-createDatabase';
import { addAsociationBetweenRolesAndUsers1669942489620 } from './migrations/1669942489620-addAsociationBetweenRolesAndUsers';

config();

const datasource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  migrations: [
    createDatabase1669941852541,
    addAsociationBetweenRolesAndUsers1669942489620,
  ],
  entities: [User, Roles, RolesUser],
});

export default datasource;
