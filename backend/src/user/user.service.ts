// @ts-nocheck
import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { Person } from './person.entity';

@Injectable()
export class UserService {

    constructor(
        private userRepository: UserRepository<User>,
        private personRepository: UserRepository<Person>,
    ){}

    async findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async findOne(id: number = 1): Promise<User> {
        return this.userRepository.findById(id);
    }

    async createRecord(user: User){
        return this.userRepository.save(user);
    }

}

