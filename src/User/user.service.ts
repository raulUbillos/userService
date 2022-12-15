import { Injectable } from '@nestjs/common';
import UserInput from './types/UserInput.model';
import Encription from 'Utils/encription';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'Database/entities/user.model';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
import UserOutput from 'User/types/UserOutput.model';
import { GraphQLError } from 'graphql';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async registerUser(userInput: UserInput): Promise<UserOutput> {
    const userToCreate: User = {
      id: v4(),
      email: userInput.email,
      isGoogleAuthenticated: userInput.isGoogleAuthenticated,
      password: Encription.encrypt(userInput.password),
      personalData: userInput.personalData,
      username: userInput.username,
    };

    await this.usersRepository.insert(userToCreate);

    return {
      email: userToCreate.email,
      password: userToCreate.password,
      personalData: userToCreate.personalData,
      username: userToCreate.username,
    };
  }

  async userById(id: string): Promise<UserOutput> {
    const user = await this.usersRepository.findOneBy({
      id,
    });

    if (!Boolean(user)) {
      throw new GraphQLError('USER_NOT_FOUND');
    }

    return {
      email: user.email,
      password: user.password,
      personalData: user.personalData,
      username: user.username,
    };
  }

  async userByUsername(username: string): Promise<UserOutput> {
    const user = await this.usersRepository.findOneBy({
      username,
    });

    if (!Boolean(user)) {
      throw new GraphQLError('USER_NOT_FOUND');
    }

    return {
      email: user.email,
      password: user.password,
      personalData: user.personalData,
      username: user.username,
    };
  }
}
