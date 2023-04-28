import { Module } from '@nestjs/common';
import { Reports } from './reports.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { ReportsRepository } from './reports.repository';

@Module({
    imports: [ TypeOrmModule.forFeature([Reports]) ],
    providers: [ ReportsService, ReportsRepository ],
    controllers: [ ReportsController ],
    exports: [ReportsService],
})
export class ReportsModule {}