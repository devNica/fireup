import { sequelizePrototypeProductRepository } from '@core/adapters/secondary/repositories/sequelize/seq-prototype-product-repository-adapter'
import { PrototypeProductRepositoryService } from './prototype-product-repository'
import { InsertPrototypeProductOP } from '@inventory/ports/output/insert-prototype-product'
import { FetchAllPrototypeProductOP } from '@inventory/ports/output/fetchall-prototype-product'

const protoProductRepositoryService = new PrototypeProductRepositoryService(sequelizePrototypeProductRepository)

const insertPrototypeProductSP: InsertPrototypeProductOP = protoProductRepositoryService
const fetchAllPrototypeProductSP: FetchAllPrototypeProductOP = protoProductRepositoryService

export {
  insertPrototypeProductSP,
  fetchAllPrototypeProductSP
}
