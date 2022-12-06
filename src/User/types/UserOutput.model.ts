import { Field, ObjectType } from '@nestjs/graphql';
import PersonalData from './PersonalDataOutput.model';

@ObjectType()
export default class UserOutput {
  @Field()
  username?: string;

  @Field()
  password?: string;

  @Field()
  email?: string;

  @Field()
  personalData?: PersonalData;

  @Field()
  token?: string;
}
