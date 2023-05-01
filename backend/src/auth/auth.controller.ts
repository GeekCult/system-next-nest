import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiHideProperty } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { ForgotAuth } from './auth.forgot';
import { UserAuth } from './auth.entity';

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}
        
    
    //@ApiHideProperty()
    //private firstName: string

    @Post('login')
    @ApiOperation({ summary: 'You must login to generate an authorization token' })
    async login(@Body() user: UserAuth) {
        return this.authService.validateUser(user);
    }

    @Post('forgot-password')
    @ApiOperation({ summary: 'You must type your e-mail to reset your password' })
    async forgot(@Body() user: ForgotAuth) {
        return this.authService.checkUser(user);
    }
}