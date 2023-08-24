import { ModelItemsEntity } from '@entities/model-items-entity'
import sequelizeInstance from '@shared/database-config'
import { NOW, DataTypes, Model, Optional } from 'sequelize'

interface ModelItemsAttrInput extends Optional<ModelItemsEntity, 'brandId' | 'isActive' | 'createdAt' | 'updatedAt'> {}

export default class ModelItemsModel extends Model<ModelItemsEntity, ModelItemsAttrInput> implements ModelItemsEntity {
  declare id?: number | undefined
  declare modelName: string
  declare modelDetail: string
  declare isActive?: boolean | undefined
  declare createdAt?: Date | undefined
  declare updatedAt?: Date | undefined
  declare brandId: number
}

ModelItemsModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false
  },
  modelName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  modelDetail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brandId: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'brand',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
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
  modelName: 'model_items'
})
