import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { PersonRepository } from './person.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { Person } from './person.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([User, Person])],
    providers: [ UserRepository, PersonRepository, UserService ],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule {}