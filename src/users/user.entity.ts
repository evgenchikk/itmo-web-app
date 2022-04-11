import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Password } from '../passwords/password.entity';
import { Comment } from '../comments/comment.entity';


@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  login: string;

  @Column()
  isOnline: boolean;

  @OneToOne(() => Password)
  @JoinColumn()
  password: Password;

  @OneToMany(() => Comment, comments => comments.user)
  comments: Comment[];
}