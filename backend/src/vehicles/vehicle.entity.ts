import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, ValidateIf, NotEquals} from "class-validator"


@Entity()
export class Vehicle {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column({ type:'varchar', length: 100 })
    @IsNotEmpty()
    @NotEquals('string')
    brand: string;
    
    @ApiProperty()
    @Column({ type:'varchar', length: 100 } )
    @IsNotEmpty()
    @NotEquals('string')
    model: string;
    
    @ApiProperty()
    @Column({ type:'varchar', length: 100 })
    @NotEquals('string')
    color: string;
    
    @ApiProperty()
    @Column({ type:'varchar', length: 50 })
    @NotEquals('string')
    license_plate: string;
    
    @ApiProperty()
    @Column({ type:'int' })
    type:number;
    
}