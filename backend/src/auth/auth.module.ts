import { Module } from '@nestjs/common';
import { JwtStrategy } from '../auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
//import { DatabaseModule } from '../database/database.module';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from './auth.repository';
//import { authProviders } from './auth.providers';
import { UserAuth } from 'src/auth/auth.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
// import { LocalStrategy } from './local-strategy';

@Module({
    imports: [
        //DatabaseModule,
        TypeOrmModule.forFeature([UserAuth]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1000s' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthRepository, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
