import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('Passwords')
export class Password {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // user_id: number;

  @Column()
  password: string;
}