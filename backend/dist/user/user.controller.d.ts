import { User } from './user.entity';
import { Person } from './person.entity';
import { UserService } from './user.service';
export declare class UserController {
    private usersService;
    constructor(usersService: UserService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    createRecord(user: User): Promise<User>;
    editRecord(user: Person, id: number): Promise<Person>;
    remove(id: number): void;
}
