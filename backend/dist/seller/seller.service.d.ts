import { SellerRepository } from './seller.repository';
import { User } from './seller.entity';
import { Person } from './person.entity';
export declare class SellerService {
    private sellerRepository;
    constructor(sellerRepository: SellerRepository<User>);
    findAll(): Promise<User[]>;
    findOne(id?: number): Promise<User>;
    createRecord(user: User): Promise<any>;
    editRecord(id: number, user: Person): Promise<any>;
    removeRecord(id?: number): Promise<any>;
}
