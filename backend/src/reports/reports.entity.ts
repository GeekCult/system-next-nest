import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, ValidateIf, NotEquals} from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

@Entity('parking')
export class Reports {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column({type:'int'})
    id_company?: number;
    
    @ApiProperty()
    @Column({ type:'varchar', length: 50 })
    license_plate?: string;
    
    @ApiProperty()
    @Column({ type:'int' })
    type?:number;

    @ApiProperty()
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date_start?: Date;

    @ApiProperty()
    @Column({ type: 'datetime', default: () => null, nullable: true })
    date_end?: string;
}
