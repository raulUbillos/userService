import UserInput from 'User/types/UserInput.model';
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
};

export default MockUserService;
