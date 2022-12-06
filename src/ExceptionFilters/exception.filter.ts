/*
https://docs.nestjs.com/exception-filters#exception-filters-1
*/

import { Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Catch(BadRequestException)
export class UserInputErrorFilter implements GqlExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const response = exception.getResponse();
    console.log(response);
    if (response instanceof Object) {
      const formattedResponse: Record<string, any> = response;
      throw new GraphQLError(formattedResponse.message);
    } else {
      const formattedException: GraphQLFormattedError = {
        message: response,
      };
      throw formattedException;
    }
  }
}
