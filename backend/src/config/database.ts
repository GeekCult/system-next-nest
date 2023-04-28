import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';
import * as dotenv from 'dotenv';

import { Company } from '../company/company.entity';
import { UserAuth } from '../auth/auth.entity';
import { Parking } from '../parking/parking.entity';
import { User } from '../user/user.entity';
import { Vehicle } from '../vehicles/vehicle.entity';
import { Reports } from '../reports/reports.entity';


dotenv.config();

const defaultConfig: DataSourceOptions = {
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    port: +(process.env.DB_PORT || 3306),

    charset: 'utf8mb4_unicode_ci',
    entities: [Company, User, UserAuth, Parking, Company, Reports],
    logging: true,
    //synchronize: true,
};

const testConfig: DataSourceOptions = {
  ...defaultConfig,
  database: `${process.env.DB_DATABASE}_test`,
  logging: false,
  synchronize: true,
};

export const databaseConfig = process.env.NODE_ENV === 'test' ? testConfig : defaultConfig;
export const dataSource = new DataSource(databaseConfig);