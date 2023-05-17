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
exports.PersonRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const person_entity_1 = require("./person.entity");
let PersonRepository = class PersonRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(person_entity_1.Person, dataSource.createEntityManager(), dataSource.createQueryRunner());
        this.dataSource = dataSource;
    }
    async findAll() {
        return this.find({ select: { id: true, firstName: true, lastName: true, email: true } });
    }
    async findById(id) {
        return this.findOne({ select: { id: true, firstName: true, lastName: true, email: true, celphone: true }, where: { id: id } });
    }
    async updateUser(id, user) {
        const model = await this.findById(id);
        if (!model) {
            return { statusCode: 400, message: "User not found" };
            throw new common_1.NotFoundException('User not found');
        }
        let set = await this.dataSource
            .createQueryBuilder()
            .update(person_entity_1.Person)
            .set({ firstName: user.firstName, lastName: user.lastName, celphone: user.celphone })
            .where("id = :id", { id: id })
            .execute();
        if (set) {
            return { statusCode: 200, message: "User updated successfuly" };
        }
        else {
            return { statusCode: 500, message: "Error updating user" };
        }
    }
};
PersonRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], PersonRepository);
exports.PersonRepository = PersonRepository;
//# sourceMappingURL=person.repository.js.map