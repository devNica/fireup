import { PrototypeProductEntity } from '@core/models/entities/prototype-product'
import { PrototypeProductRepositoryOP } from '@core/ports/output/repositories/prototype-product-repository-op'
import { PrototypeProductModel } from '../../orm/sequelize/models'

class SequelizePrototypeProductRepositoryAdapter implements PrototypeProductRepositoryOP {
  async insert (data: PrototypeProductEntity): Promise<void> {
    try {
      await PrototypeProductModel.create({ ...data })
    } catch (error) {
      console.log(error)
      throw new Error(String(error))
    }
  }
}

export const sequelizePrototypeProductRepository = new SequelizePrototypeProductRepositoryAdapter()
