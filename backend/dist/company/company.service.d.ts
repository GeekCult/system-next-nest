import { CompanyRepository } from './company.repository';
import { Company } from './company.entity';
export declare class CompanyService {
    private readonly companysRepository;
    constructor(companysRepository: CompanyRepository);
    findAll(): Promise<Company[]>;
    findOne(id?: number): Promise<Company>;
    find(): Promise<string>;
    findOneByEmail(companyname: string): Promise<any>;
    createRecord(company: Company): Promise<Company>;
}
