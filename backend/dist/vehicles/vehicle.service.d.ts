import { VehicleRepository } from './vehicle.repository';
import { Vehicle } from './vehicle.entity';
export declare class VehicleService {
    private vehicleRepository;
    constructor(vehicleRepository: VehicleRepository<Vehicle>);
    findAll(): Promise<Vehicle[]>;
    findOne(id?: number): Promise<Vehicle>;
    find(): Promise<string>;
    createRecord(vehicle: Vehicle): Promise<any>;
}
