import {
  IsString,
  //IsEnum,
  IsNumber,
  IsOptional,
  IsNotEmpty,
  //IsUUID,
} from 'class-validator';
//import { AccountType } from '../entities/conta.entity';

export class CreateContaDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsNumber()
  @IsOptional()
  balance?: number;

  @IsString()
  bank: string;

  @IsString()
  number: string;

  @IsNotEmpty({ message: 'Usuário é obrigatório' })
  @IsNumber()
  userId: number; // Se você usar UUID no User, mude para @IsUUID() e o tipo para string
}
