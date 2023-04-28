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
exports.ParkingService = void 0;
const common_1 = require("@nestjs/common");
const parking_repository_1 = require("./parking.repository");
let ParkingService = class ParkingService {
    constructor(parkingRepository) {
        this.parkingRepository = parkingRepository;
    }
    async findAll() {
        return this.parkingRepository.find();
    }
    async findOne(id = 1) {
        return this.parkingRepository.findOneBy({ id: id });
    }
    async searchLicensePlate(license_plate) {
        return this.parkingRepository.findOne({ license_plate: license_plate });
    }
    async createRecord(parking) {
        return this.parkingRepository.save(parking);
    }
    async save(id, parking) {
        const recordset = await this.parkingRepository.findOneBy({
            id: id,
        });
        if (recordset) {
            recordset.license_plate = parking.license_plate;
            return await this.parkingRepository.save(recordset);
        }
        else {
            throw new common_1.UnauthorizedException('item park not found');
        }
    }
    async delete(id) {
        const recordset = await this.parkingRepository.findOneBy({
            id: id,
        });
        if (recordset) {
            return await this.parkingRepository.delete(id);
        }
        else {
            throw new common_1.UnauthorizedException('item park not found');
        }
    }
};
ParkingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [parking_repository_1.ParkingRepository])
], ParkingService);
exports.ParkingService = ParkingService;
//# sourceMappingURL=parking.service.js.map