import { Module } from '@nestjs/common';
import { ContasService } from './contas.service';
import { ContasController } from './contas.controller';
import { Conta } from './entities/conta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Conta])],
  controllers: [ContasController],
  providers: [ContasService],
})
export class ContasModule {}
