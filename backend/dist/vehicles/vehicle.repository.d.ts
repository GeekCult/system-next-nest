import { DataSource, Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';
export declare class VehicleRepository extends Repository<Vehicle> {
    private dataSource;
    constructor(dataSource: DataSource);
    findAll(): Promise<Vehicle[]>;
}
