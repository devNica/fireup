
import sequelizeInstance from '@core/frameworks/sequelize/database-connection'
import { DatabaseOutputPort } from '@core/ports/output/orm/database-op'
import { Sequelize } from 'sequelize'
import { BrandModel, ProductModel, ModelItemsModel, FileModel, ProductImageModel, ProductHasModelModel, ProductCategoryModel, PrototypeProductModel } from './models'

export class SequelizeAdapter implements DatabaseOutputPort {
  private readonly sequelize: Sequelize
  constructor () {
    this.sequelize = sequelizeInstance
  }

  async connect (): Promise<void> {
    try {
      await this.sequelize.authenticate()
    } catch (error) {
      throw new Error('Database connection failed')
    }
  }

  async syncModels (alter: boolean): Promise<void> {
    try {
      // ASSOCIATIONS

      // BRAND MODEL
      BrandModel.hasMany(ProductModel, { foreignKey: 'brandId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
      BrandModel.hasMany(ModelItemsModel, { foreignKey: 'brandId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' })

      // FILE MODEL
      FileModel.belongsToMany(ProductModel, { through: 'product_image', foreignKey: 'fileId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
      FileModel.hasMany(ProductImageModel, { foreignKey: 'fileId' })

      // MODEL ITEMS MODEL
      ModelItemsModel.belongsTo(BrandModel, { foreignKey: 'brandId' })
      ModelItemsModel.belongsToMany(ProductModel, { through: 'product_has_model', foreignKey: 'modelId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
      ModelItemsModel.hasMany(ProductHasModelModel, { foreignKey: 'modelId' })

      // PRODUCT MODEL
      ProductModel.belongsTo(BrandModel, { foreignKey: 'brandId' })
      ProductModel.belongsToMany(FileModel, { through: 'product_image', foreignKey: 'productId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
      ProductModel.hasMany(ProductImageModel, { foreignKey: 'productId' })
      ProductModel.belongsTo(ProductCategoryModel, { foreignKey: 'categoryId' })
      ProductModel.belongsToMany(ModelItemsModel, { through: 'product_has_model', foreignKey: 'productId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
      ProductModel.hasMany(ProductHasModelModel, { foreignKey: 'productId' })

      // PRODUCT HAS MODEL
      ProductHasModelModel.belongsTo(ProductModel, { foreignKey: 'productId' })
      ProductHasModelModel.belongsTo(ModelItemsModel, { foreignKey: 'modelId' })

      // PROTOTYPE PRODUCT MODEL
      PrototypeProductModel.belongsTo(ProductCategoryModel, { foreignKey: 'categoryId' })

      // PRODUCT CATEGORY MODEL
      ProductCategoryModel.hasMany(ProductModel, { foreignKey: 'categoryId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
      ProductCategoryModel.hasMany(PrototypeProductModel, { foreignKey: 'categoryId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' })

      // PRODUCT IMAGE MODEL
      ProductImageModel.belongsTo(FileModel, { foreignKey: 'fileId' })
      ProductImageModel.belongsTo(ProductModel, { foreignKey: 'productId' })

      if (alter) {
        await this.sequelize.sync({ alter })
      }
    } catch (error) {
      throw new Error(String(error))
    }
  }
}
