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
exports.SellerRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const seller_entity_1 = require("./seller.entity");
let SellerRepository = class SellerRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(seller_entity_1.Seller, dataSource.createEntityManager(), dataSource.createQueryRunner());
        this.dataSource = dataSource;
    }
    async findAll() {
        return this.find({ select: { id: true, firstName: true, lastName: true, email: true } });
    }
    async findById(id) {
        return this.findOne({ select: { id: true, firstName: true, lastName: true, email: true }, where: { id: id } });
    }
};
SellerRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], SellerRepository);
exports.SellerRepository = SellerRepository;
//# sourceMappingURL=seller.repository.js.map