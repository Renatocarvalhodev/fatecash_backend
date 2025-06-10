import { Injectable } from '@nestjs/common';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conta } from './entities/conta.entity';

@Injectable()
export class ContasService {
  constructor(
    @InjectRepository(Conta)
    private readonly accountRepository: Repository<Conta>,
  ) {}

  async create(createAccountDto: CreateContaDto): Promise<Conta> {
    const newConta = this.accountRepository.create(createAccountDto);
    return await this.accountRepository.save(newConta);
  }

  findAll() {
    return `This action returns all contas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conta`;
  }

  async findByUserId(userId: number): Promise<Conta[]> {
    return await this.accountRepository.find({
      where: { userId },
    });
  }

  update(id: number, updateContaDto: UpdateContaDto) {
    return `This action updates a #${id} conta`;
  }

  remove(id: number) {
    return `This action removes a #${id} conta`;
  }
}
