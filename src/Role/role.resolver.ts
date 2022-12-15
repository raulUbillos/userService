import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoleService } from './role.service';
import RoleInput from './types/RoleInput.model';
import RoleOutput from './types/RoleOutput.model';

@Resolver((of) => RoleOutput)
export default class RoleResolver {
  constructor(public roleService: RoleService) {}

  @Query(() => RoleOutput)
  role(@Args('name') name: string) {
    return this.roleService.roleByName(name);
  }

  @Mutation(() => String)
  async giveRoleToUser(
    @Args('permissions', { type: () => RoleInput }) permissions: RoleInput,
  ) {
    await this.roleService.associateRoleWithUser(permissions);
    return 'ok';
  }

  @Mutation(() => String)
  async removeRoleFromUser(
    @Args('permissions', { type: () => RoleInput }) permissions: RoleInput,
  ) {
    await this.roleService.removeRoleFromUser(permissions);
    return 'ok';
  }
}
