import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePetDto, UpdatePetDto } from './dto/create-pet.dto';
import { Pet } from './entities/pet.entity';
import { PetService } from './pet.service';

@Resolver(() => Pet)
export class PetResolver {
  constructor(private service: PetService) {}

  @Query(() => [Pet])
  async pets() {
    return await this.service.findAll();
  }

  @Query(() => Pet)
  async pet(@Args('id') id: number) {
    return await this.service.findOne(id);
  }

  @Mutation(() => Pet, { name: 'createPet' })
  async create(@Args('input') input: CreatePetDto) {
    return await this.service.create(input);
  }
  @Mutation(() => Pet, { name: 'updatePet' })
  async update(@Args('input') input: UpdatePetDto) {
    return await this.service.update(input.id, input);
  }
}
