import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from './app.module';
import "reflect-metadata";

async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
    .setTitle('Car Parking Controller')
    .setDescription('API for vehicle entry and exit control. Developed in NodeJs, NestJs, TypeScript, TypeOrm, Swagger, JWT and Mysql. </br> In this API you must first create a user with email and password. </br> After Login with Auth to generate the Token, add the generated token into Autorize sistem to access the API.')
    .setVersion('1.0')
    .addTag('Api Manager')
    .addBearerAuth( { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', name: 'JWT', description: 'Enter JWT token', in: 'header', }, 'JWT-auth',)
    .build();
    
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3002);
}
bootstrap();