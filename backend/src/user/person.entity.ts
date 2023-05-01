import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity("user")
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    firstName: string;
    
    @ApiProperty()
    @Column()
    lastName: string;

    @ApiProperty()
    @Column()
    email: string;

}
