// @ts-nocheck
import { Injectable, Inject, InjectRepository } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CompanyRepository } from './company.repository';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {

    constructor(
        //@InjectRepository(Company)
        private readonly companysRepository: CompanyRepository 
        ) {}

    async findAll(): Promise<Company[]> {
        return this.companysRepository.findAll();
    }

    async findOne(id: number = 1): Promise<Company> {
        //return {name: "Pera", id: id}
        return this.companysRepository.findOneBy({ id: id });
    }

    async find(): Promise<string> {
        return "Hello";
    }

    async findOneByEmail(companyname: string) {
        return this.companyRepository.findOneBy({ email: companyname });
    }

    async createRecord(company: Company){
        //return companys;
        return this.companysRepository.save(company);
    }

}

