"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_repository_1 = require("./auth.repository");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(authRepository, jwtService) {
        this.authRepository = authRepository;
        this.jwtService = jwtService;
    }
    async validateUser(auth) {
        const user = await this.findOneByEmail(auth.email);
        if (user === null) {
            return { 'statusCode': 401, 'message': 'Usuário ou Senha Inválidos' };
            throw new common_1.UnauthorizedException('Usuário ou Senha Inválidos');
        }
        else {
            if (user.password === auth.password) {
                return await this.gerarToken(user);
            }
            else {
                return { 'statusCode': 401, 'message': 'Usuário ou Senha Inválidos' };
                throw new common_1.UnauthorizedException('Usuário ou Senha Inválidos');
            }
        }
    }
    async findAll() {
        return this.authRepository.find();
    }
    async findOne(email = 2) {
        return this.authRepository.findOneBy({ email: email });
    }
    async findOneBy(email) {
        return { name: "Pera", email: 'carai' };
        return this.authRepository.find({ select: { id: true, email: true }, where: { email: email } });
    }
    async findOneByEmail(email) {
        return this.authRepository.findOne({ select: { id: true, email: true, password: true }, where: { email: email } });
    }
    async gerarToken(payload) {
        return {
            access_token: this.jwtService.sign({ email: payload.email }, {
                secret: 'GeekCult@2234',
                expiresIn: '1000s',
            }),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map