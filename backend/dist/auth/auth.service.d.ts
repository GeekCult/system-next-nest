import { AuthRepository } from './auth.repository';
import { JwtService } from '@nestjs/jwt';
import { UserAuth } from './auth.entity';
import { UserEmailAuth } from './auth.email.entity';
export declare class AuthService {
    private readonly authRepository;
    private jwtService;
    constructor(authRepository: AuthRepository, jwtService: JwtService);
    validateUser(auth: UserAuth): Promise<any>;
    findAll(): Promise<UserAuth[]>;
    findOne(email?: number): Promise<UserEmailAuth>;
    findOneBy(email: string): Promise<UserEmailAuth>;
    findOneByEmail(email: string): Promise<UserAuth>;
    gerarToken(payload: UserAuth): Promise<{
        access_token: string;
    }>;
}
