import {AppDataSource} from '@/databases/app.datasource'
import {Customers} from './entities'

export const customerList = async ():Promise<Customers[]> => {
    const db = await AppDataSource.initialize()
    const customers = await db.getRepository(Customers).createQueryBuilder('customers').getMany()
    await AppDataSource.destroy()

    return customers
}