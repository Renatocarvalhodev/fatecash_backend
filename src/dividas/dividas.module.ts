import { Module } from '@nestjs/common';
import { DividasService } from './dividas.service';
import { DividasController } from './dividas.controller';
import { Divida } from './entities/divida.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Divida])],
  controllers: [DividasController],
  providers: [DividasService],
})
export class DividasModule {}
