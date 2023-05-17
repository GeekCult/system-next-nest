import { Module } from '@nestjs/common';
import { SellerRepository } from './seller.repository';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { Seller } from './seller.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Seller])],
    providers: [ SellerRepository, SellerService ],
    controllers: [SellerController],
    exports: [SellerService],
})
export class SellerModule {}