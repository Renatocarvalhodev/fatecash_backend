import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Divida } from './entities/divida.entity';
import { CreateDividaDto } from './dto/create-divida.dto';
import { UpdateDividaDto } from './dto/update-divida.dto';

@Injectable()
export class DividasService {
  constructor(
    @InjectRepository(Divida)
    private readonly dividaRepository: Repository<Divida>,
  ) {}

  async create(createDebtDto: CreateDividaDto): Promise<Divida> {
    const debt = this.dividaRepository.create(createDebtDto);
    return this.dividaRepository.save(debt);
  }

  async findByUserId(userId: number): Promise<Divida[]> {
    return await this.dividaRepository.find({
      where: { userId },
    });
  }

  async findAll(): Promise<Divida[]> {
    return this.dividaRepository.find({
      relations: ['user'],
    });
  }

  async findOne(id: string): Promise<Divida> {
    const debt = await this.dividaRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!debt) {
      throw new NotFoundException(`Debt with ID "${id}" not found`);
    }

    return debt;
  }

  async update(id: string, updateDividaDto: UpdateDividaDto): Promise<Divida> {
    const debt = await this.findOne(id);
    const updated = Object.assign(debt, updateDividaDto);
    return this.dividaRepository.save(updated);
  }

  async remove(id: string): Promise<void> {
    const debt = await this.findOne(id);
    await this.dividaRepository.remove(debt);
  }
}
