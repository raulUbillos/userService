import RoleInput from 'Role/types/RoleInput.model';
import RoleOutput from 'Role/types/RoleOutput.model';

const MockRoleService = {
  roleByName: jest.fn(async (name: string): Promise<RoleOutput> => {
    return {
      name: '',
      permissions: [],
    };
  }),
  associateRoleWithUser: jest.fn(async (roleInput: RoleInput) => {
    return {
      id: '',
    };
  }),
  removeRoleFromUser: jest.fn(async (roleInput: RoleInput) => void {}),
};

export default MockRoleService;
