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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const reports_repository_1 = require("./reports.repository");
let ReportsService = class ReportsService {
    constructor(reportsRepository) {
        this.reportsRepository = reportsRepository;
    }
    async summary(query) {
        query.filter = { group: true, period: false };
        return this.reportsRepository.summary(query);
    }
    async summaryByPeriod(query) {
        query.filter = { period: true };
        return this.reportsRepository.summaryByPeriod(query);
    }
    async findAll() {
        return this.reportsRepository.findAll();
    }
    async findOne(id = 1) {
        return this.reportsRepository.findOneBy({ id: id });
    }
    async summaryOld(reports) {
        var result = { Mes: 'Maio' };
        var result2 = [];
        const recordset = await this.reportsRepository.find();
        if (recordset) {
            result.dia = 'Fevereiro';
            for (const contract of Object.keys(recordset)) {
                result.rola = 'Dezembro';
            }
            for (let key in recordset) {
                let value = recordset[key].license_plate;
                if (value != 'string')
                    result2.push(value);
            }
            for (let i = 0; i < recordset.length; i++) {
                result.caraio = 'Dezembro';
            }
        }
        return result2;
    }
};
ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [reports_repository_1.ReportsRepository])
], ReportsService);
exports.ReportsService = ReportsService;
//# sourceMappingURL=reports.service.js.map