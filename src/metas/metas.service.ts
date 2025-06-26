import { Injectable } from '@nestjs/common';
import { CreateMetaDto } from './dto/create-meta.dto';
import { UpdateMetaDto } from './dto/update-meta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Meta } from './entities/meta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetasService {
  constructor(
    @InjectRepository(Meta)
    private metasRepository: Repository<Meta>,
  ) {}

  async create(createMetaDto: CreateMetaDto): Promise<Meta> {
    const meta = this.metasRepository.create(createMetaDto);
    return await this.metasRepository.save(meta);
  }

  findAll() {
    return `This action returns all metas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meta`;
  }

  async findByUserId(userId: number): Promise<Meta[]> {
    return await this.metasRepository.find({
      where: { userId },
    });
  }

  update(id: number, updateMetaDto: UpdateMetaDto) {
    return `This action updates a #${id} meta`;
  }

  remove(id: number) {
    return `This action removes a #${id} meta`;
  }
}
