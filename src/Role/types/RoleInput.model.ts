import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class RoleInput {
  @Field()
  username: string;

  @Field()
  roleName: string;
}
