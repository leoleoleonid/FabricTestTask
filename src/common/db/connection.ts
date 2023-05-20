import { DataSource } from "typeorm"
import {config} from "../config";
import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";

const dbConfig = {...config.db};
export const dataSource = new DataSource(dbConfig as DataSourceOptions);

//     {
//     type: config.db.type,
//     host: config.db.host,
//     port: config.db.port,
//     username: config.db.username,
//     password: config.db.password,
//     database: config.db.database,
//     entities: ["src/entity/*.js"],
//     logging: true,
//     synchronize: true,
// })