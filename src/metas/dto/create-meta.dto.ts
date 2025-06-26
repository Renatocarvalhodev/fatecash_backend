import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
  IsInt,
} from 'class-validator';

export class CreateMetaDto {
  @IsNotEmpty({ message: 'Título é obrigatório' })
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  targetAmount: number;

  @IsNumber()
  currentAmount: number;

  @IsNotEmpty()
  @IsDateString()
  deadline: Date;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsInt()
  userId: number;
}
