import { UseFilters } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserInputErrorFilter } from 'ExceptionFilters/exception.filter';
import UserInput from 'User/types/UserInput.model';
import UserOutput from 'User/types/UserOutput.model';
import { UserService } from 'User/user.service';

@Resolver(() => UserOutput)
@UseFilters(UserInputErrorFilter)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserOutput)
  async user(@Args('id') id: string): Promise<UserOutput> {
    return await this.userService.userById(id);
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
