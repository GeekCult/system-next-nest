import { Vehicle } from './vehicle.entity';
import { VehicleService } from './vehicle.service';
export declare class VehicleController {
    private vehiclesService;
    constructor(vehiclesService: VehicleService);
    findAll(): Promise<Vehicle[]>;
    createRecord(vehicle: Vehicle): Promise<Vehicle>;
}
