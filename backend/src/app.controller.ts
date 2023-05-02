import { Controller, Get, Post, Request } from '@nestjs/common';
import {ApiExcludeController, ApiExcludeEndpoint } from '@nestjs/swagger';
import { AppService } from './app.service';


@Controller()
export class AppController {
    
    constructor(private readonly appService: AppService) {}

    @ApiExcludeEndpoint()
    @Post('send-email')
    sendEmail(@Request() req: any){
        //return {statuCode: 200, message: "Done"}
        return this.appService.enviarEmail(
            req.body.email,
            req.body.mensagem
        );
    }
}
