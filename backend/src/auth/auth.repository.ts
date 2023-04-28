import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserAuth } from './auth.entity';

@Injectable()
export class AuthRepository extends Repository<UserAuth> {
  constructor(private dataSource: DataSource) {
    super(
        UserAuth,
        dataSource.createEntityManager(),
        dataSource.createQueryRunner(),
      );
    }
    
    async findAll() {
        //return this;
        return this.find();
      }
}