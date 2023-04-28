import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parking } from './parking.entity';
import { ParkingRepository } from './parking.repository';
import { ParkingService } from './parking.service';
import { ParkingController } from './parking.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Parking])],
    providers: [ ParkingService, ParkingRepository ],
    controllers: [ParkingController],
    exports: [ParkingService],
})
export class ParkingModule {}