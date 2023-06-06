import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePetDto {
  @Field()
  name: string;

  @Field()
  type: string;
}

@InputType()
export class UpdatePetDto extends CreatePetDto {
  @Field(() => Int)
  id: number;
}
