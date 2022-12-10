import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'Database/entities/user.model';
import { GraphQLError } from 'graphql';
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

  afterEach(() => jest.restoreAllMocks());

  describe('registerUser', () => {
    it('add an user to the database', async () => {
      const spyInstance = jest.spyOn(userRepository, 'insert');

      userService.registerUser(MOCK_USER);

      expect(spyInstance).toHaveBeenCalled();
    });
  });

  describe('userById', () => {
    it('check that, if not user found, it threw the USER_NOT_FOUND error', async () => {
      const spyInstance = jest.spyOn(userRepository, 'findBy');
      MockUserRepository.findBy.mockImplementationOnce(async (where) => {
        return [];
      });
      const ID = '';
      const userById = userService.userById(ID);

      await expect(userById).rejects.toThrow(
        new GraphQLError('USER_NOT_FOUND'),
      );
      expect(spyInstance).toHaveBeenCalled();
    });
    it('search for the user on the DB', async () => {
      const spyInstance = jest.spyOn(userRepository, 'findBy');
      const ID = '';
      const userById = userService.userById(ID);
      expect(spyInstance).toHaveBeenCalled();
      await expect(userById).resolves.not.toBeFalsy();
    });
  });

  describe('userByUsername', () => {
    it('search for the user on the DB', async () => {
      const spyInstance = jest.spyOn(userRepository, 'findBy');
      const USERNAME = '';
      const userByUsername = userService.userByUsername(USERNAME);
      expect(spyInstance).toHaveBeenCalled();
      await expect(userByUsername).resolves.not.toBeFalsy();
    });
    it('check that, if not user found, it threw the USER_NOT_FOUND error', async () => {
      const spyInstance = jest.spyOn(userRepository, 'findBy');
      MockUserRepository.findBy.mockImplementationOnce(async (where) => {
        return [];
      });
      const USERNAME = '';
      const userByUsername = userService.userByUsername(USERNAME);

      await expect(userByUsername).rejects.toThrow(
        new GraphQLError('USER_NOT_FOUND'),
      );
      expect(spyInstance).toHaveBeenCalled();
    });
  });
});
