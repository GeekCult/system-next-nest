"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = exports.databaseConfig = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
const company_entity_1 = require("../company/company.entity");
const auth_entity_1 = require("../auth/auth.entity");
const parking_entity_1 = require("../parking/parking.entity");
const user_entity_1 = require("../user/user.entity");
const reports_entity_1 = require("../reports/reports.entity");
dotenv.config();
const defaultConfig = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    port: +(process.env.DB_PORT || 3306),
    charset: 'utf8mb4_unicode_ci',
    entities: [company_entity_1.Company, user_entity_1.User, auth_entity_1.UserAuth, parking_entity_1.Parking, company_entity_1.Company, reports_entity_1.Reports],
    logging: true,
};
const testConfig = Object.assign(Object.assign({}, defaultConfig), { database: `${process.env.DB_DATABASE}_test`, logging: false, synchronize: true });
exports.databaseConfig = process.env.NODE_ENV === 'test' ? testConfig : defaultConfig;
exports.dataSource = new typeorm_1.DataSource(exports.databaseConfig);
//# sourceMappingURL=database.js.map