import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { UserAuth } from './auth.entity';

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}
        
    @Post('login')
    @ApiOperation({ summary: 'You must login to generate an authorization token' })
    async login(@Body() user: UserAuth) {
        return this.authService.validateUser(user);
    }
}