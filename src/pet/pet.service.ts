import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,
  ) {}

  async create(input: CreatePetDto) {
    const result = await this.petRepository.save({
      name: input.name,
      type: input.type,
    });

    return result;
  }

  async findAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async findOne(id: number) {
    const data = await this.petRepository.findOneBy({ id });

    return data;
  }

  async update(id: number, input: CreatePetDto) {
    const entity = await this.petRepository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('Entity not found');
    }

    return await this.petRepository.save({ ...entity, ...input });
  }

  async remove(id: number): Promise<void> {
    await this.petRepository.delete(id);
  }
}
