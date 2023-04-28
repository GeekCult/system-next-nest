import { ParkingRepository } from './parking.repository';
import { Parking } from './parking.entity';
export declare class ParkingService {
    private parkingRepository;
    constructor(parkingRepository: ParkingRepository<Parking>);
    findAll(): Promise<Parking[]>;
    findOne(id?: number): Promise<Parking>;
    searchLicensePlate(license_plate: string): Promise<Parking>;
    createRecord(parking: Parking): Promise<Parking>;
    save(id: number, parking: Parking): Promise<any>;
    delete(id: number): Promise<any>;
}
