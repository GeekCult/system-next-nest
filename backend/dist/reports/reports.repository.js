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
exports.ReportsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const reports_entity_1 = require("./reports.entity");
let ReportsRepository = class ReportsRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(reports_entity_1.Reports, dataSource.createEntityManager(), dataSource.createQueryRunner());
        this.dataSource = dataSource;
    }
    async summary(query) {
        const querySQL = this.prepareQuery(query);
        const recordset = await this.query(querySQL);
        return recordset;
    }
    async summaryByPeriod(query) {
        const querySQL = this.prepareQuery(query);
        const recordset = await this.query(querySQL);
        var checkin = 0;
        var checkout = 0;
        var result = {};
        if (recordset) {
            for (let key in recordset) {
                const date = recordset[key].date.split(" ");
                const time = date[1].split(":");
                const querySQL2 = this.prepareQuery2(recordset[key].id, 'date_start', date[0], time[0]);
                const querySQL3 = this.prepareQuery2(recordset[key].id, 'date_end', date[0], time[0]);
                const checkin = await this.query(querySQL2);
                const checkout = await this.query(querySQL3);
                result[key] = { date: recordset[key].date, name: recordset[key].name, checkin: checkin[0].total, checkout: checkout[0].total };
            }
        }
        return result;
    }
    findAll() {
        return this.find();
    }
    prepareQuery(query) {
        const filter = query === null || query === void 0 ? void 0 : query.filter;
        let select = `SELECT company.name AS name, company.id AS id`;
        let from = `FROM parking LEFT JOIN company ON parking.id_company = company.id`;
        let groupBy = 'GROUP BY company.id';
        if (filter === null || filter === void 0 ? void 0 : filter.period) {
            select += `,CONCAT (DATE(parking.date_start), ' ', HOUR(parking.date_start), ':00') as date`;
            groupBy += `, date`;
        }
        if (filter === null || filter === void 0 ? void 0 : filter.period) {
            select += `, (SELECT COUNT(*) FROM parking WHERE id_company = company.id AND date_start IS NOT NULL) AS checkin, (SELECT COUNT(*) FROM parking WHERE id_company = company.id AND date_end IS NOT NULL) AS checkout`;
        }
        const querySQL = `${select} ${from} ${groupBy}`;
        return querySQL;
    }
    prepareQuery2(id, field, date, hour) {
        const querySQL = `SELECT COUNT(*) as total FROM parking WHERE (id_company = ${id} AND ${field} >= '${date} ${hour}:00:00' AND ${field} <= '${date} ${hour}:59:59')`;
        return querySQL;
    }
};
ReportsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ReportsRepository);
exports.ReportsRepository = ReportsRepository;
//# sourceMappingURL=reports.repository.js.map