import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'apc_db',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  entities: [__filename.endsWith('.js') ? 'dist/**/*.entity.js' : 'src/**/*.entity.ts'],
  migrations: [__filename.endsWith('.js') ? 'dist/migrations/**/*.js' : 'src/migrations/**/*.ts'],
  subscribers: [__filename.endsWith('.js') ? 'dist/subscribers/**/*.js' : 'src/subscribers/**/*.ts'],
});
