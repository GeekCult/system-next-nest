// @ts-nocheck
import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        private userRepository: UserRepository<User>,
    ){}

    async findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async findOne(id: number = 1): Promise<User> {
        return this.userRepository.findOneBy({ id: id });
    }

    async createRecord(user: User){
        return this.userRepository.save(user);
    }

}

