import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ContasModule } from './contas/contas.module';
import { MetasModule } from './metas/metas.module';
import { DividasModule } from './dividas/dividas.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(config),
    UsersModule,
    AuthModule,
    ContasModule,
    MetasModule,
    DividasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
