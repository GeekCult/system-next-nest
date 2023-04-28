// @ts-nocheck
import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { ParkingRepository } from './parking.repository';
import { Parking } from './parking.entity';

@Injectable()
export class ParkingService {

    constructor(
        private parkingRepository: ParkingRepository<Parking>,
    ){}

    async findAll(): Promise<Parking[]> {
        return this.parkingRepository.find();
    }

    async findOne(id: number = 1): Promise<Parking> {
        //return {name: "Pera", id: id}
        return this.parkingRepository.findOneBy({ id: id });
    }

    async searchLicensePlate(license_plate: string): Promise<Parking> {
        //return {name: "Pera", id: id}
        return this.parkingRepository.findOne({ license_plate: license_plate });
    }
    
    async createRecord(parking: Parking): Promise<Parking> {
        return this.parkingRepository.save(parking);
    }
    
    async save(id: number, parking: Parking){
        const recordset = await this.parkingRepository.findOneBy({
            id: id,
        })
        if(recordset){
            recordset.license_plate = parking.license_plate
            return await this.parkingRepository.save(recordset);
        }else{
            throw new UnauthorizedException('item park not found');
        }
    }

    async delete(id: number){
        const recordset = await this.parkingRepository.findOneBy({
            id: id,
        })
        if(recordset){
            return await this.parkingRepository.delete(id);
        }else{
            throw new UnauthorizedException('item park not found');
        }
        
    }

}

