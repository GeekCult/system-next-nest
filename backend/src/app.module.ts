import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuth } from './auth/auth.entity';
import { User } from './user/user.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database';

@Module({
    imports: [
        TypeOrmModule.forRoot(databaseConfig),        
        AuthModule, UserModule
    ],
    //providers: [{provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor,}]
})
export class AppModule {}