import { ProductEntity } from '@entities/product-entity'
import { UUID } from '@shared/custom-types'
import sequelizeInstance from '@shared/database-config'
import { NOW, DataTypes, Model, Optional } from 'sequelize'

interface ProductAttrInput extends Optional<ProductEntity, 'id' | 'isActive' | 'createdAt' | 'updatedAt' > {}
export interface ProductAttrOutput extends Required<ProductEntity> {}

export default class ProductModel extends Model<ProductEntity, ProductAttrInput> implements ProductEntity {
  declare id?: UUID | undefined
  declare reference: string
  declare productName: string
  declare description: string
  declare partNumber: string
  declare minInventory: number
  declare maxInventory: number
  declare isActive?: boolean | undefined
  declare applyTax: boolean
  declare hasImage: boolean
  declare createdAt?: Date | undefined
  declare updatedAt?: Date | undefined
  declare categoryId: number
  declare brandId: number
}

ProductModel.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    unique: true
  },
  reference: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT('medium'),
    allowNull: false
  },
  partNumber: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  minInventory: {
    type: DataTypes.DECIMAL(11, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  maxInventory: {
    type: DataTypes.DECIMAL(11, 2),
    allowNull: false,
    defaultValue: 0.00
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  applyTax: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  hasImage: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: NOW(),
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  categoryId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'product_category',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  },
  brandId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'brand',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  }
}, {
  sequelize: sequelizeInstance,
  modelName: 'product'
})
