import BrandModel from '@models/brand'
import FileModel from '@models/file'
import ModelItemsModel from '@models/model-item'
import ProductModel from '@models/product'
import ProductCategoryModel from '@models/product-category'
import ProductHasModelModel from '@models/product-has-model'
import ProductImageModel from '@models/product-image'
import PrototypeProductModel from '@models/prototype-product'
import { Sequelize } from 'sequelize'

export async function sequelizeLoader (sequelize: Sequelize, alter: boolean): Promise<void> {
  try {
    await sequelize.authenticate()
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
      await sequelize.sync({ alter })
        .then(() => console.log('all models have been migrated'))
        .catch(err => console.log(err))
    }
  } catch (error) {
    console.log(error)
    // throw new Error('An Error has ocurred when try migrate models')
  }
}
