/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type:'postgres',
            host:process.env.DB_HOST,
            port:Number.parseInt(process.env.DB_PORT),
            database:process.env.DB_NAME,
            username:process.env.DB_USERNAME,
            password:process.env.DB_PASSWORD,
            autoLoadEntities: true
        })
    ],
    
    controllers: [],
    providers: [],
})
export class DatabaseModule {}
