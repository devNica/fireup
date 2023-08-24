import { ProductHasModelEntity } from '@entities/product-has-model-entity'
import { UUID } from '@shared/custom-types'
import sequelizeInstance from '@shared/database-config'
import { DataTypes, Model } from 'sequelize'

interface ProductHasModelAttrInput extends Required<ProductHasModelEntity> {}

export default class ProductHasModelModel extends Model<ProductHasModelEntity, ProductHasModelAttrInput> implements ProductHasModelEntity {
  productId: UUID
  modelId: number
}

ProductHasModelModel.init({
  productId: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'product',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  },
  modelId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'model_items',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  }
}, {
  sequelize: sequelizeInstance,
  modelName: 'product_has_model'
})
