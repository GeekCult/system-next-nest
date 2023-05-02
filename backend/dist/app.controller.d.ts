import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sendEmail(req: any): Promise<{
        statusCode: number;
        message: string;
    } | {
        statusCode: number;
        message: string;
    }>;
}
