import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, ValidateIf, NotEquals} from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

@Entity('company')
export class Company {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column({ length: 100 })
    @IsNotEmpty()
    @NotEquals("string")
    name: string;
    
    @ApiProperty()
    @Column({ length: 50 })
    @IsNotEmpty()
    @NotEquals("string")
    document: string;
    
    @ApiProperty()
    @Column({ length: 100 })
    @IsNotEmpty()
    @NotEquals("string")
    address: string;
    
    @ApiProperty()
    @Column({ length: 50 })
    @IsNotEmpty()
    @NotEquals("string")
    phone: string;
    
    @ApiProperty()
    @Column()
    @IsNotEmpty()
    @IsInt()
    @NotEquals(0)
    cars: number;

    @ApiProperty()
    @Column()
    @IsNotEmpty()
    @IsInt()
    @NotEquals(0)
    bikes: number;
    
}