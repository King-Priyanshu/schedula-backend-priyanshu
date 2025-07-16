import 'dotenv/config'; // make sure to load .env
import { DataSource } from 'typeorm';
import { User } from './src/user/user.entity';
import { Doctor } from './src/doctor/doctor.entity';
import { Patient } from './src/patient/patient.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Doctor, Patient],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});

