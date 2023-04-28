import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, ValidateIf, NotEquals} from "class-validator"


@Entity('parking')
export class Parking {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column({type:'int'})
    @IsNotEmpty()
    @IsInt()
    @NotEquals(0)
    id_company: number;
    
    @ApiProperty()
    @Column({ type:'varchar', length: 50 })
    @NotEquals('string')
    license_plate: string;
    
    @ApiProperty()
    @Column({ type:'int' })
    type:number;

    @ApiProperty()
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date_start: Date;

    @ApiProperty()
    @Column({ type: 'datetime', default: () => null, nullable: true })
    date_end: string;
    
}