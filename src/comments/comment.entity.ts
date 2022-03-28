import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  comment: string;
}