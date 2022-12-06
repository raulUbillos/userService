/*
https://docs.nestjs.com/modules
*/
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/Database/entities/user.model';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [UserService, UserResolver],
})
export class UserModule {}
