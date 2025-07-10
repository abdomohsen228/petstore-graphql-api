import { UseGuards } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.create(createUserInput);
  }
}
