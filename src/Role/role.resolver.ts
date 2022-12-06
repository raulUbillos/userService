import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import RoleInput from './types/RoleInput.model';
import RoleOutput from './types/RoleOutput.model';

@Resolver((of) => RoleOutput)
export default class RoleResolver {
  @Query(() => RoleOutput)
  role(@Args('name') name: string) {
    return {};
  }

  @Mutation(() => RoleOutput)
  giveRoleToUser(
    @Args('permissions', { type: () => RoleInput }) permissions: RoleInput,
  ) {
    return {};
  }

  @Mutation(() => RoleOutput)
  removeRoleFromUser(
    @Args('permissions', { type: () => RoleInput }) permissions: RoleInput,
  ) {
    return {};
  }
}
