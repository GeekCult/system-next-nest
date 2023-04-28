import { Module } from '@nestjs/common';
import { VehicleRepository } from './vehicle.repository';

import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';

import { Vehicle } from './vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Vehicle])],
    providers: [ VehicleService, VehicleRepository ],
    controllers: [VehicleController],
    exports: [VehicleService],
})
export class VehicleModule {}