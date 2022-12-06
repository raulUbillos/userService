import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class RoleInput {
  @Field()
  userEmail: string;

  @Field()
  roleName: string;
}
