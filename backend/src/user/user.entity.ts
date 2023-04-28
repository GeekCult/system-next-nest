import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty, ValidateIf, NotEquals} from "class-validator"
import { ApiProperty } from '@nestjs/swagger';
import { Person } from "./person.entity";


@Entity()
export class User{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @IsNotEmpty()
    @NotEquals('string')
    @ApiProperty()
    @Column()
    firstName: string;
    
    @IsNotEmpty()
    @NotEquals('string')
    @ApiProperty()
    @Column()
    lastName: string;
    
    @IsNotEmpty()
    @NotEquals('string')
    @ApiProperty()
    @Column()
    email: string;
    
    @IsNotEmpty()
    @NotEquals('string')
    @ApiProperty()
    @Column()
    password: string;

}
