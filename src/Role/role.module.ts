/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'Database/entities/roles.model';
import RoleResolver from './role.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Roles])],
  controllers: [],
  providers: [RoleResolver],
})
export class RoleModule {}
