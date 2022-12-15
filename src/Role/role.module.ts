import { RoleService } from './role.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'Database/entities/roles.model';
import RoleResolver from './role.resolver';
import { RolesUser } from 'Database/entities/roles_user.model';
import { User } from 'Database/entities/user.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Roles]),
    TypeOrmModule.forFeature([RolesUser]),
  ],
  controllers: [],
  providers: [RoleService, RoleResolver],
})
export class RoleModule {}
