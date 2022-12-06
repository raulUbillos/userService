import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class PersonalDataOutput {
  @Field(() => [String], { nullable: true })
  phoneNumber: string[];
}
