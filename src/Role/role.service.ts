/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from 'Database/entities/roles.model';
import { RolesUser } from 'Database/entities/roles_user.model';
import { User } from 'Database/entities/user.model';
import { GraphQLError } from 'graphql';
import { Repository } from 'typeorm';
import RoleInput from './types/RoleInput.model';
import RoleOutput from './types/RoleOutput.model';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RolesUser)
    public rolesUserRepository: Repository<RolesUser>,
    @InjectRepository(Roles)
    public rolesRepository: Repository<Roles>,
    @InjectRepository(User)
    public userRepository: Repository<User>,
  ) {}

  async roleByName(name: string): Promise<RoleOutput> {
    const role = await this.rolesRepository.findOneBy({
      name: name,
    });

    if (!Boolean(role)) {
      throw new GraphQLError('ROLE_NOT_FOUND');
    }

    return {
      name: role.name,
      permissions: role.permisions,
    };
  }

  async associateRoleWithUser(roleInput: RoleInput) {
    const { role, user } = await this.searchUser(roleInput);
    
    const insertResult = await this.rolesUserRepository.insert({
      role: role,
      user: user,
    });
    return insertResult.identifiers[0];
  }

  async searchUser(roleInput: RoleInput) {
    
    const role = await this.rolesRepository.findOneBy({
      name: roleInput.roleName,
    });

    if (!Boolean(role)) {
      throw new GraphQLError('ROLE_NOT_FOUND');
    }

    const user = await this.userRepository.findOneBy({
      username: roleInput.username,
    });
    if (!Boolean(user)) {
      throw new GraphQLError('USER_NOT_FOUND');
    }

    return { role, user };
  }

  async removeRoleFromUser(roleInput: RoleInput) {
    const { role, user } = await this.searchUser(roleInput);

    const deleted = await this.rolesUserRepository.delete({
      role,
      user,
    });

    return deleted.affected;
  }
}
