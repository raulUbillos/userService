import { User } from 'Database/entities/user.model';
import { FindOptionsWhere } from 'typeorm';

const Users: Record<string, User> = {
  'test': {
    email: '',
    id: '',
    isGoogleAuthenticated: false,
    password: '',
    username: '',
    calendarId: '',
  }
};

const MockUserRepository = {
  findOneBy: jest.fn(async (where: FindOptionsWhere<User>): Promise<User> => {
    return Users[where.username.valueOf() as string];
  }),
};

export default MockUserRepository;
