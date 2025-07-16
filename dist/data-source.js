"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./src/user/user.entity");
const doctor_entity_1 = require("./src/doctor/doctor.entity");
const patient_entity_1 = require("./src/patient/patient.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +(process.env.DB_PORT ?? 5432),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [user_entity_1.User, doctor_entity_1.Doctor, patient_entity_1.Patient],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map