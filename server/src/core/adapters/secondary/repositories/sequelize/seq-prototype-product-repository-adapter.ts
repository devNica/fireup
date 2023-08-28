import { PrototypeProductEntity } from '@core/models/entities/prototype-product'
import { PrototypeProductRepositoryOP } from '@core/ports/output/repositories/prototype-product-repository-op'
import { ProductCategoryModel, PrototypeProductModel } from '../../orm/sequelize/models'
import { PrototypeProductMap } from '@core/models/maps/prototype-product'

class SequelizePrototypeProductRepositoryAdapter implements PrototypeProductRepositoryOP {
  async insert (data: PrototypeProductEntity): Promise<void> {
    try {
      await PrototypeProductModel.create({ ...data })
    } catch (error) {
      console.log(error)
      throw new Error(String(error))
    }
  }

  async fetchAll (): Promise<PrototypeProductMap[] | never> {
    try {
      const rows = await PrototypeProductModel.findAll({
        include: { model: ProductCategoryModel, attributes: ['categoryName'], as: 'category' }
      })

      const result: PrototypeProductMap[] = rows.map(r => {
        return {
          id: r.id,
          prototypeRef: r.prototypeRef,
          prototypeName: r.prototypeName,
          isActive: r.isActive,
          createdAt: r.createdAt,
          updatedAt: r.updatedAt,
          categoryId: r.categoryId,
          categoryName: r.category.categoryName
        }
      })
      return result
    } catch (error) {
      console.log(error)
      throw new Error(String(error))
    }
  }
}

export const sequelizePrototypeProductRepository = new SequelizePrototypeProductRepositoryAdapter()
