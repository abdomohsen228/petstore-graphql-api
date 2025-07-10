import { Module } from '@nestjs/common';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UsersResolver } from './user.resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UsersResolver],
  exports: [UserService],
})
export class UserModule {}
