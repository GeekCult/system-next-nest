import { UserRepository } from './user.repository';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository<User>);
    findAll(): Promise<User[]>;
    findOne(id?: number): Promise<User>;
    createRecord(user: User): Promise<any>;
}
