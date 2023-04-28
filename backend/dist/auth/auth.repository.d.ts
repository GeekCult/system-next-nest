import { DataSource, Repository } from 'typeorm';
import { UserAuth } from './auth.entity';
export declare class AuthRepository extends Repository<UserAuth> {
    private dataSource;
    constructor(dataSource: DataSource);
    findAll(): Promise<UserAuth[]>;
}
