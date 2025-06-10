import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  //OneToMany,
  JoinColumn,
} from 'typeorm';
//import { Transaction } from './transaction.entity'; // Supondo que você também terá essa entidade

// export enum AccountType {
//   CHECKING = 'CHECKING',
//   SAVINGS = 'SAVINGS',
//   CREDIT = 'CREDIT',
//   // Adicione os tipos conforme seu enum Prisma
// }

@Entity()
export class Conta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({ type: 'float', default: 0 })
  balance: number;

  @Column()
  bank: string;

  @Column()
  number: string;

  // Relacionamento com User
  @Column()
  userId: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  // Relacionamento com Transações
  //   @OneToMany(() => Transaction, (transaction) => transaction.account)
  //   transactions: Transaction[];
}
