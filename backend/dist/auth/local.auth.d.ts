import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { UserAuth } from './auth.entity';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(auth: UserAuth): Promise<any>;
}
export {};
