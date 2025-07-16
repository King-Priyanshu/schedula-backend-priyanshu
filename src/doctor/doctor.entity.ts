import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  name: string;

  @Column()
  specialization: string;

  @Column()
  qualification: string;

  @Column('int')
  experienceYears: number;

  @Column({ nullable: true })
  about: string;

  @Column({ nullable: true })
  profileImageUrl: string;
}
