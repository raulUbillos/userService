import { UseFilters } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserInputErrorFilter } from 'ExceptionFilters/exception.filter';
import UserInput from './types/UserInput.model';
import UserOutput from './types/UserOutput.model';
import { UserService } from './user.service';

@Resolver(() => UserOutput)
@UseFilters(UserInputErrorFilter)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserOutput)
  user(@Args('id') id: string): UserOutput {
    return {};
  }

  @Mutation(() => UserOutput)
  async register(@Args('user') user: UserInput): Promise<UserOutput> {
    return await this.userService.registerUser(user);
  }

  @Query(() => UserOutput)
  userByUsername(@Args('username') username: string): UserOutput {
    return {
      username,
    };
  }
}
