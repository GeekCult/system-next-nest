import { AuthService } from './auth.service';
import { UserAuth } from './auth.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: UserAuth): Promise<any>;
}
