import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Roles } from 'Database/entities/roles.model';
import { RolesUser } from 'Database/entities/roles_user.model';
import { User } from 'Database/entities/user.model';
import { GraphQLError } from 'graphql';
import RoleResolver from 'Role/role.resolver';
import { RoleService } from 'Role/role.service';
import RoleInput from 'Role/types/RoleInput.model';
import MockRoleRepository from './mock/mockRoleRepository';
import MockRoleService from './mock/mockRoleService';
import MockRoleUserRepository from './mock/mockRoleUserRepository';
import MockUserRepository from './mock/mockUserRepository';

describe('RoleService', () => {
  let roleService: RoleService;
  let roleRepository;
  let userRepository;
  let roleUserRepository;

  const MOCK_ROLE_INPUT: RoleInput = {
    roleName: '',
    username: '',
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(RolesUser),
          useValue: MockRoleUserRepository,
        },
        {
          provide: getRepositoryToken(User),
          useValue: MockUserRepository,
        },
        {
          provide: getRepositoryToken(Roles),
          useValue: MockRoleRepository,
        },
        RoleService,
      ],
    }).compile();
    roleService = await module.get(RoleService);
    roleRepository = await module.get(getRepositoryToken(Roles));
    userRepository = await module.get(getRepositoryToken(User));
    roleUserRepository = await module.get(getRepositoryToken(RolesUser));
  });

  afterEach(() => jest.clearAllMocks());

  describe('roleByName', () => {
    it('tried to get role and returned it by using name', async () => {
      const role = await roleService.roleByName('test');
      
      expect(role).toBeTruthy();
    });

    it('tried to get a role and didn\'t found it, threw and error', async () => {
      const rolePromise = roleService.roleByName('nothing');

      await expect(rolePromise).rejects.toThrow(
        new GraphQLError('ROLE_NOT_FOUND'),
      );
    });
  });

  describe('associateRoleWithUser', () => {
    it('test that it execute succesfully', async () => {
      const identifiers = await roleService.associateRoleWithUser({
        roleName:'test',
        username:'test'
      })

      expect(identifiers).toBeTruthy();
    });
  });

  describe('searchUser', () => {
    it('test that it execute succesfully', async () => {
      const identifiers = await roleService.searchUser({
        roleName:'test',
        username:'test'
      })
      expect(identifiers.role).toBeTruthy();
      expect(identifiers.user).toBeTruthy();
    });
    it('test that it throws an error if the user cant be found', async () => {
      const rolePromise = roleService.searchUser({
        roleName:'test',
        username:'puta'
      })

      await expect(rolePromise).rejects.toThrow(
        new GraphQLError('USER_NOT_FOUND'),
      );
    });
    it('test that it throws an error if the role cant be found', async () => {
      const rolePromise = roleService.searchUser({
        roleName:'puta',
        username:'test'
      })

      await expect(rolePromise).rejects.toThrow(
        new GraphQLError('ROLE_NOT_FOUND'),
      );
    });
  });

  describe('removeRoleFromUser', () => {
    it('see that it executed succesfully', async () => {
      const roleDelete = await roleService.removeRoleFromUser({
        roleName: 'test',
        username: 'test'
      });

      expect(roleDelete).toBeTruthy();
    });
  });
});