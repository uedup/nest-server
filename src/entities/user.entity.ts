import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // 自动生成id
  id: number

  @Column()
  name: string

  @Column()
  age: number
}