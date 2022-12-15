import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class RoleOutput {
  @Field(() => String, { nullable: true })
  name: string;
  @Field(() => [String], { nullable: true })
  permissions?: string[];
}
