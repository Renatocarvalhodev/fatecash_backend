import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDateString,
  //IsOptional,
} from 'class-validator';

export class CreateDividaDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  totalAmount: number;

  @IsNumber()
  remainingAmount: number;

  @IsNumber()
  monthlyPayment: number;

  @IsDateString()
  dueDate: Date;

  @IsNumber()
  interestRate: number;

  @IsString()
  type: string;

  @IsNumber()
  userId: number;
}
