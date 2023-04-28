"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
require("reflect-metadata");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Car Parking Controller')
        .setDescription('API for vehicle entry and exit control. Developed in NodeJs, NestJs, TypeScript, TypeOrm, Swagger, JWT and Mysql. </br> In this API you must first create a user with email and password. </br> After Login with Auth to generate the Token, add the generated token into Autorize sistem to access the API.')
        .setVersion('1.0')
        .addTag('Api Manager')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', name: 'JWT', description: 'Enter JWT token', in: 'header', }, 'JWT-auth')
        .build();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3002);
}
bootstrap();
//# sourceMappingURL=main.js.map