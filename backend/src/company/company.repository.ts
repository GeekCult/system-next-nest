import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyRepository extends Repository<Company> {
  constructor(private dataSource: DataSource) {
    super(
        Company,
        dataSource.createEntityManager(),
        dataSource.createQueryRunner(),
      );
    }
    
    async findAll() {
        //return this;
        return this.find();
      }
}