// @ts-nocheck
import { Injectable, Inject } from '@nestjs/common';
import { VehicleRepository } from './vehicle.repository';
import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehicleService {

    constructor(
        
            private vehicleRepository: VehicleRepository<Vehicle>,
        ) {}

    async findAll(): Promise<Vehicle[]> {
        return this.vehicleRepository.find();
    }

    async findOne(id: number = 1): Promise<Vehicle> {
        //return {name: "Pera", id: id}
        return this.vehicleRepository.findOneBy({ id: id });
    }

    async find(): Promise<string> {
        return "Hello";
    }

    async createRecord(vehicle: Vehicle){
        //return vehicle;
        return this.vehicleRepository.save(vehicle);
    }

}

