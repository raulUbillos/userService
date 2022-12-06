import { APP_FILTER } from '@nestjs/core';
import { UserInputErrorFilter } from './ExceptionFilters/exception.filter';
import { RoleModule } from './Role/role.module';
import { UserModule } from './User/user.module';
import { DatabaseModule } from './Database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    RoleModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), process.env.PATH_GRAPHQL),
      sortSchema: true,
      debug: false,
      playground: true,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: UserInputErrorFilter,
    },
  ],
})
export class AppModule {}
