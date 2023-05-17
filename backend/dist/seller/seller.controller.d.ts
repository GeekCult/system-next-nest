import { Seller } from './seller.entity';
import { SellerService } from './seller.service';
export declare class SellerController {
    private sellerService;
    constructor(sellerService: SellerService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    createRecord(user: Seller): Promise<Seller>;
    editRecord(user: Seller, id: number): Promise<Seller>;
    remove(id: number): void;
}
