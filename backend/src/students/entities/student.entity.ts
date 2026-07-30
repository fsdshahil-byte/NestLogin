import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
 name!: string;

  @Column()
  email!: string;

  @Column()
  course!: string;

  @Column()
  age!: number;

  @Column()
  phone!: string;
}