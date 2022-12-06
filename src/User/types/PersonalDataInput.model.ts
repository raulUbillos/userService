import { Field, InputType } from '@nestjs/graphql';
import { IsArray, Matches } from 'class-validator';

@InputType()
export default class PersonalDataInput {
  @Field(() => [String])
  @IsArray()
  phoneNumber: string[];
}
