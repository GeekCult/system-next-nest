import { DataSource, Repository } from 'typeorm';
import { Person } from './person.entity';
export declare class PersonRepository extends Repository<Person> {
    private dataSource;
    constructor(dataSource: DataSource);
    findAll(): Promise<Person[]>;
    findById(id: number): Promise<Person | null>;
    updateUser(id: number, user: Person): Promise<{
        statusCode: number;
        message: string;
    }>;
}
