import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import { databaseConfig } from './config/database';

@Module({
    imports: [
        TypeOrmModule.forRoot(databaseConfig),        
        AuthModule, UserModule,
        MailerModule.forRoot({
            transport: {
              host: process.env.MAIL_HOSTSMTP, //host smtp
              secure: false, //regras de segurança do serviço smtp
              port: 587, // porta
              auth: { //dados do usuário e senha
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
              },
              tls: {
                rejectUnauthorized: false
            },
              ignoreTLS: false,
            },
            defaults: { // configurações que podem ser padrões
              from: 'Carlos Garcia',
            },
          }),
    ],
    controllers: [AppController],
    providers: [AppService],
    //providers: [{provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor,}]
})
export class AppModule {}