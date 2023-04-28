<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

API for checkin and checkout de vehicles.
Developed in NodeJs, NestJs, TypeScript, TypeOrm, Swagger, JWT and Mysql.
In this API you must first create a user with email and password.
After login with Auth to generate the Token, add the generated token to access the API.

## Configuration
Create a .env file at root project with the following data bellow
Create a database and in the config/database file uncomment the property synchronize: true

.env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=drconsulta

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## API EndPoints (Swagger)

You can check the API endpoints accessing the follow url
http://localhost:3000/api

## Preview
See how it looks like
<img src="https://www.geekcult.com.br/media/user/images/original/screen.png" alt="Parking" style="max-width: 100%;"/>

## Support

Find me on my web site or LinkedIn

## Stay in touch

- Author - [Carlos Garcia](https://www.linkedin.com/in/carloslopesgarcia/)
- Website - [https://www.geekcult.com.br](https://www.geekcult.com.br)
- Twitter - [@geekcultoficial](https://twitter.com/geekcultoficial)

## License

Nest is [MIT licensed](LICENSE).
