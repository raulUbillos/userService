/*
https://docs.nestjs.com/modules
*/
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'Database/entities/user.model';
import { UserInputErrorFilter } from 'ExceptionFilters/exception.filter';
import { UserResolver } from 'User/user.resolver';
import { UserService } from 'User/user.service';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [
    UserService,
    UserResolver,
    {
      provide: APP_FILTER,
      useClass: UserInputErrorFilter,
    },
  ],
})
export class UserModule {}
