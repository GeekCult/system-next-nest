import { MailerService } from '@nestjs-modules/mailer';
export declare class AppService {
    private mailerService;
    constructor(mailerService: MailerService);
    enviarEmail(email: string, mensagem: string): Promise<{
        statusCode: number;
        message: string;
    } | {
        statusCode: number;
        message: string;
    }>;
}
