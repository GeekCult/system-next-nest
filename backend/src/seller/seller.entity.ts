import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, NotEquals} from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

@Entity("seller")
export class Seller{
    
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

}
