import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePetInput {
  @Field(() => Int)
  name: string;
  @Field({ nullable: true })
  type?: string;
}
