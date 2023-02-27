import "reflect-metadata"
import {DataSource} from 'typeorm'
import {Customers} from '@/modules/customers/entities'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "mbex71",
    password: "1234567890",
    database: "customers",
    entities:[Customers],
    // debug:true,
    synchronize:true
})
