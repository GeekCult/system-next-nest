import { DataSource, Repository } from 'typeorm';
import { Seller } from './seller.entity';
export declare class SellerRepository extends Repository<Seller> {
    private dataSource;
    constructor(dataSource: DataSource);
    findAll(): Promise<Seller[]>;
    findById(id: number): Promise<Seller | null>;
}
