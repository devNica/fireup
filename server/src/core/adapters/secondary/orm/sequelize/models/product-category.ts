import { ProductCategoryEntity } from '@core/models/entities/product-category'
import sequelizeInstance from '@core/frameworks/sequelize/database-connection'
import { DataTypes, Model, NOW, Optional } from 'sequelize'

interface ProductCategoryAttrInput extends Optional<ProductCategoryEntity, 'id' | 'isActive' | 'createdAt' | 'updatedAt'> {}

export default class ProductCategoryModel extends Model<ProductCategoryEntity, ProductCategoryAttrInput> implements ProductCategoryEntity {
  declare id?: number | undefined
  declare categoryName: string
  declare isActive?: boolean | undefined
  declare createdAt?: Date | undefined
  declare updatedAt?: Date | undefined
}

ProductCategoryModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: NOW(),
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize: sequelizeInstance,
  modelName: 'product_category'
})
