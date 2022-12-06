import { Injectable } from '@nestjs/common';
import UserInput from './types/UserInput.model';
import Encription from 'src/utils/encription';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Database/entities/user.model';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
import UserOutput from './types/UserOutput.model';

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
}
