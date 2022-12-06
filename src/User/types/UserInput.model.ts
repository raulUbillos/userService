import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, Matches } from 'class-validator';
import PersonalData from './PersonalDataInput.model';

@InputType()
export default class UserInput {
  @Field()
  username?: string;

  @Field()
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d]).{8,}$/, {
    message: 'PASSWORD_INVALID',
  })
  @IsString({ message: 'PASSWORD_MUST_BE_A_STRING' })
  password: string;

  @Field()
  personalData?: PersonalData;

  @Field()
  @IsEmail({}, { message: 'NOT_EMAIL' })
  email?: string;

  @Field(() => Boolean)
  isGoogleAuthenticated?: boolean;
}
