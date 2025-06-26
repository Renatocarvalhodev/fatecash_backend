import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Divida {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('float')
  totalAmount: number;

  @Column('float')
  remainingAmount: number;

  @Column('float')
  monthlyPayment: number;

  @Column({ type: 'datetime' })
  dueDate: Date;

  @Column('float')
  interestRate: number;

  @Column()
  type: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}
