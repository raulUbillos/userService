import UserInput from 'User/types/UserInput.model';
import UserOutput from 'User/types/UserOutput.model';
import Encription from 'Utils/encription';

const MockUserService = {
  registerUser: jest.fn(async (user: UserInput) => {
    return {
      email: user.email,
      password: Encription.encrypt(user.password),
      personalData: user.personalData,
      username: user.username,
    };
  }),
  userById: jest.fn(async (id: string): Promise<UserOutput> => {
    return {};
  }),
  userByUsername: jest.fn(async (username: string): Promise<UserOutput> => {
    return {};
  }),
};

export default MockUserService;
