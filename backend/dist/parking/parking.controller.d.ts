import { Parking } from './parking.entity';
import { ParkingService } from './parking.service';
export declare class ParkingController {
    private parkingsService;
    constructor(parkingsService: ParkingService);
    findAll(): Promise<Parking[]>;
    remove(id: number): Promise<any>;
    createRecord(parking: Parking): Promise<Parking>;
    edit(parking: Parking, id: number): Promise<Parking>;
}
