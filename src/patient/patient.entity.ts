import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  name: string;

  @Column('int')
  age: number;

  @Column()
  gender: 'male' | 'female' | 'other';

  @Column()
  phoneNumber: string;

  @Column()
  address: string;
}
