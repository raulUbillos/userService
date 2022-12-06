import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class RoleOutput {
  @Field()
  username: string;

  @Field(() => [String], { nullable: true })
  permissions: string[];
}
