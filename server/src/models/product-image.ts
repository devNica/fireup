import { ProductImageEntity } from '@entities/product-image-entity'
import { UUID } from '@shared/custom-types'
import sequelizeInstance from '@shared/database-config'
import { DataTypes, Model } from 'sequelize'

interface ProductImageAttrInput extends Required<ProductImageEntity> {}

export default class ProductImageModel extends Model<ProductImageEntity, ProductImageAttrInput> implements ProductImageEntity {
  productId: UUID
  fileId: UUID
}

ProductImageModel.init({
  productId: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'product',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  },
  fileId: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'file',
      key: 'filename'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  }
}, {
  sequelize: sequelizeInstance,
  modelName: 'product_image'
})
