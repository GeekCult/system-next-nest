import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
    
    constructor(private mailerService: MailerService) {}

    async enviarEmail(email: string, mensagem: string) {
        let send = await this.mailerService.sendMail({
            to: "publicidade.exe@gmail.com",
            from: 'PurplePier <contato@purplepier.com.br>',
            subject: 'Enviando Email com NestJS',
            html: `<h3 style="color: red">${mensagem}</h3>`,
        }).then(function(response){
            //console.log(response)
            return {statusCode: 200, message: "E-mail sent"}
        }).catch(function(response){
            return {statusCode: 400, message: "Error to try sendind e-mail"}
        });

        return send
      }
}
