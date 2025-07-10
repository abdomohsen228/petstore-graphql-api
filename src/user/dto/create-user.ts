import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsEmail, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsAlpha()
  username: string;

  @Field()
  @IsEmail()
  email: string;
  @Field()
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  password: string;
}
