import { User } from 'Database/entities/user.model';

const MockUserRepository = {
  insert: jest.fn(async (user: User) => {
    return {
      identifiers: [user.id],
      generatedMaps: [],
    };
  }),
};

export default MockUserRepository;
