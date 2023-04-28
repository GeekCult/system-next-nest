import { DataSource, Repository } from 'typeorm';
import { Company } from './company.entity';
export declare class CompanyRepository extends Repository<Company> {
    private dataSource;
    constructor(dataSource: DataSource);
    findAll(): Promise<Company[]>;
}
