import { RolesUser } from 'Database/entities/roles_user.model';
import { User } from 'Database/entities/user.model';
import { DeleteResult, FindOptionsWhere } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

const MockRoleUserRepository = {
  insert: jest.fn(async (rolesUser: RolesUser) => {

    return {
      identifiers: ['test'],
      generatedMaps: [],
    };
  }),
  delete: jest.fn(async (where: FindOptionsWhere<RolesUser>): Promise<DeleteResult> => {
    return {
      affected:1,
      raw:{}
    };
  }),
};

export default MockRoleUserRepository;
