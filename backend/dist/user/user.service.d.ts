import { UserRepository } from './user.repository';
import { PersonRepository } from './person.repository';
import { User } from './user.entity';
import { Person } from './person.entity';
export declare class UserService {
    private userRepository;
    private personRepository;
    constructor(userRepository: UserRepository<User>, personRepository: PersonRepository<Person>);
    findAll(): Promise<User[]>;
    findOne(id?: number): Promise<User>;
    createRecord(user: User): Promise<any>;
    editRecord(id: number, user: Person): Promise<any>;
    removeRecord(id?: number): Promise<any>;
}
