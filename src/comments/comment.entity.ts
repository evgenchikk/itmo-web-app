import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity('Comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;


  @ManyToOne(() => User, user => user.comments)
  user: User;


  @ApiProperty({ 
    example: 'Lorem ipsum', 
    description: 'text of comment'
  })
  @Column()
  comment: string;
}