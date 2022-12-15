import { User } from 'Database/entities/user.model';
import { FindOptionsWhere } from 'typeorm';

const MockUserRepository = {
  insert: jest.fn(async (user: User) => {
    return {
      identifiers: [user.id],
      generatedMaps: [],
    };
  }),
  findOneBy: jest.fn(async (where: FindOptionsWhere<User>): Promise<User> => {
    return {
      email: '',
      id: '',
      isGoogleAuthenticated: false,
      password: '',
      username: '',
      calendarId: '',
    };
  }),
};

export default MockUserRepository;
