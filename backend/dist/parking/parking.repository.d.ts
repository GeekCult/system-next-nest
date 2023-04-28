import { DataSource, Repository } from 'typeorm';
import { Parking } from './parking.entity';
export declare class ParkingRepository extends Repository<Parking> {
    private dataSource;
    constructor(dataSource: DataSource);
    findAll(): Promise<Parking[]>;
}
