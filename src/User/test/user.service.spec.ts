import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'Database/entities/user.model';
import UserInput from 'User/types/UserInput.model';
import { UserService } from '../user.service';
import MockUserRepository from './mock/mockUserRepository';

describe('UserService', () => {
  let userService: UserService;
  let userRepository;
  const MOCK_USER: UserInput = {
    password: 'testPasword',
    email: 'raulubillos@gmail.com',
    isGoogleAuthenticated: false,
    personalData: {
      phoneNumber: ['+542477630437'],
    },
    username: 'racifo',
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(User),
          useValue: MockUserRepository,
        },
        UserService,
      ],
    }).compile();
    userService = await module.get(UserService);
    userRepository = await module.get(getRepositoryToken(User));
  });

  afterEach(() => jest.clearAllMocks());

  describe('registerUser', () => {
    it('register an user', async () => {
      const spyInstance = jest.spyOn(userRepository, 'insert');

      userService.registerUser(MOCK_USER);

      expect(spyInstance).toHaveBeenCalled();
    });
  });
});
