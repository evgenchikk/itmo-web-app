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
    description: 'User\'s name'
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 'Ivanov',
    description: 'User\'s surname'
  })
  @Column()
  surname: string;

  @ApiProperty({
    example: 'superivan',
    description: 'User\'s unique nickname for login'
  })
  @Column()
  login: string;

  @ApiProperty({
    example: 'true',
    description: 'Online/not online status'
  })
  @Column()
  isOnline: boolean;


  @ApiProperty({
    description: 'User\'s password'
  })
  @OneToOne(() => Password)
  @JoinColumn()
  password: Password;

  @ApiProperty({
    description: 'User\'s comments'
  })
  @OneToMany(() => Comment, comments => comments.user)
  comments: Comment[];
}