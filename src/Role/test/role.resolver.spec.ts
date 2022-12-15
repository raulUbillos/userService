import { Test } from '@nestjs/testing';
import RoleResolver from 'Role/role.resolver';
import { RoleService } from 'Role/role.service';
import RoleInput from 'Role/types/RoleInput.model';
import MockRoleService from './mock/mockRoleService';

describe('RoleResolver', () => {
  let roleResolver: RoleResolver;
  let roleService: RoleService;

  const MOCK_ROLE_INPUT: RoleInput = {
    roleName: '',
    username: '',
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: RoleService,
          useValue: MockRoleService,
        },
        RoleResolver,
      ],
    }).compile();
    roleResolver = await module.get(RoleResolver);
    roleService = await module.get(RoleService);
  });

  afterEach(() => jest.clearAllMocks());

  describe('role', () => {
    it('get role using name', async () => {
      const role = await roleResolver.role('');
      expect(role).toBeTruthy();
    });
  });

  describe('giveRoleToUser', () => {
    it('give role to user', async () => {
      const response = await roleResolver.giveRoleToUser(MOCK_ROLE_INPUT);
      expect(response).toBe('ok');
    });
  });

  describe('removeRoleFromUser', () => {
    it('remove role from user', async () => {
      const response = await roleResolver.removeRoleFromUser(MOCK_ROLE_INPUT);
      expect(response).toBe('ok');
    });
  });
});
