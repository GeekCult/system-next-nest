import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserRepository extends Repository<User> {
    private dataSource;
    constructor(dataSource: DataSource);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
}
