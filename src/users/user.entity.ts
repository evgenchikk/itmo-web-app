import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Password } from '../passwords/password.entity';
import { Comment } from '../comments/comment.entity';


@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;


  @ApiProperty({
    example: 'Ivan',
    description: 'User\'s name',
    required: true
  })
  @Column()
  name: string;


  @ApiProperty({
    example: 'Ivanov',
    description: 'User\'s surname',
    required: true
  })
  @Column()
  surname: string;


  @ApiProperty({
    example: 'superivan',
    description: 'User\'s unique nickname for login',
    required: true
  })
  @Column()
  login: string;


  @ApiProperty({
    example: 'true',
    description: 'Online/not online status',
    required: false
  })
  @Column()
  isOnline: boolean;


  @ApiProperty({
    description: 'User\'s password',
    required: true
  })
  @OneToOne(() => Password)
  @JoinColumn()
  password: Password;


  @ApiProperty({
    description: 'User\'s comments',
    required: false
  })
  @OneToMany(() => Comment, comments => comments.user)
  comments: Comment[];
}