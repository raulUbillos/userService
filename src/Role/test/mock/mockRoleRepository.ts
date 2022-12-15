import { Roles } from 'Database/entities/roles.model';
import { FindOptionsWhere } from 'typeorm';

const roles : Record<string, Roles> = {
  'test':{
    id: '',
    name: '',
    permisions: [],
  }
}

const MockRoleRepository = {
  findOneBy: jest.fn(async (where: FindOptionsWhere<Roles>): Promise<Roles> => {

    return roles[where.name.valueOf() as string];
  }),
};

export default MockRoleRepository;
