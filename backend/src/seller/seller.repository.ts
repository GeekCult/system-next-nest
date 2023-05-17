import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Seller } from './seller.entity';

@Injectable()
export class SellerRepository extends Repository<Seller> {
    constructor(private dataSource: DataSource) {
    super(
        Seller,
        dataSource.createEntityManager(),
        dataSource.createQueryRunner(),
      );
    }
    
    async findAll() {
      return this.find({select: {id: true, firstName: true, lastName: true, email: true}});
    }

    async findById(id: number){
      return this.findOne({select: {id: true, firstName: true, lastName: true, email: true}, where: {id: id}});
    }
    
}