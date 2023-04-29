import { Entity, Column, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
//import { User } from '../user/user.entity';

@Entity('user')
export class ForgotAuth {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column({ length: 250 })
    email?: string;
    
}