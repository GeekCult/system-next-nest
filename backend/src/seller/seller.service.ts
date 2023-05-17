// @ts-nocheck
import { Injectable, Inject } from '@nestjs/common';
import { SellerRepository } from './seller.repository';
import { User } from './seller.entity';
import { Person } from './person.entity';

@Injectable()
export class SellerService {

    constructor(
        private sellerRepository: SellerRepository<User>
    ){}

    async findAll(): Promise<User[]> {
        return sellerRepository.findAll();
    }

    async findOne(id: number = 1): Promise<User> {
        return this.sellerRepository.findById(id);
    }

    async createRecord(user: User){
        return this.sellerRepository.save(user);
    }

    async editRecord(id: number, user: Person){
        return this.sellerRepository.updateUser(id, user);
    }

    async removeRecord(id: number = 1){
        return this.sellerRepository.update(id);
    }
}

