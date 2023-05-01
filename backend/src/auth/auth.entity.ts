import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('user')
export class UserAuth {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column({ length: 250 })
    email?: string;
    
    @ApiProperty()
    @Column({ length: 250 })
    password?: string;

    //@ApiProperty()
    @Column({ length: 250 })
    firstName?: string;

    //@ApiProperty()
    @Column({ length: 250 })
    lastName?: string;
    
}