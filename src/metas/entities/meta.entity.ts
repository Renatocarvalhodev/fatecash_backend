import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Meta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('float')
  targetAmount: number;

  @Column('float', { default: 0 })
  currentAmount: number;

  @Column({ type: 'datetime' })
  deadline: Date;

  @Column()
  category: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}
