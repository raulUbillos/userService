import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { User } from 'Database/entities/user.model';
import { GraphQLError } from 'graphql';
import UserInput from 'User/types/UserInput.model';
import { UserResolver } from '../user.resolver';
import { UserService } from '../user.service';
import MockUserService from './mock/mockService';
import MockUserRepository from './mock/mockUserRepository';

describe('UserResolver', () => {
  let userResolver: UserResolver;
  let userService: UserService;

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
        {
          provide: UserService,
          useValue: MockUserService,
        },
        UserResolver,
      ],
    }).compile();
    userResolver = await module.get(UserResolver);
    userService = await module.get(UserService);
  });

  afterEach(() => jest.clearAllMocks());

  describe('register', () => {
    it('call register user on userService', async () => {
      const spyInstance = jest.spyOn(userService, 'registerUser');
      userResolver.register(MOCK_USER);

      expect(spyInstance).toHaveBeenCalled();
      expect(spyInstance).not.toThrowError();
    });
  });
  describe('user', () => {
    it('calls user by id on userService', async () => {
      const spyInstance = jest.spyOn(userService, 'userById');
      const ID = '';

      userResolver.user(ID);

      expect(spyInstance).toHaveBeenCalled();
    });
  });
});
