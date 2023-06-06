import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { PetResolver } from './pet.resolver';
import { PetService } from './pet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetService, PetResolver],
})
export class PetModule {}
