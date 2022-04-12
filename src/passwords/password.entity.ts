import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity('Passwords')
export class Password {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // user_id: number;
  
  @ApiProperty({
    description: 'user\'s password'
  })
  @Column()
  password: string;
}