import { PrototypeProductEntity } from '@core/models/entities/prototype-product'
import sequelizeInstance from '@core/frameworks/sequelize/database-connection'
import { DataTypes, Model, NOW, Optional } from 'sequelize'

interface PrototypeProductAttrInput extends Optional<PrototypeProductEntity, 'id' | 'isActive' | 'createdAt' | 'updatedAt'> {}

export default class PrototypeProductModel extends Model<PrototypeProductEntity, PrototypeProductAttrInput> implements PrototypeProductEntity {
  declare id?: number | undefined
  declare prototypeRef: string
  declare prototypeName: string
  declare isActive?: boolean | undefined
  declare createdAt?: Date | undefined
  declare updatedAt?: Date | undefined
  declare categoryId: number
}

PrototypeProductModel.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  prototypeRef: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  prototypeName: {
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
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'product_category',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  }
}, {
  sequelize: sequelizeInstance,
  modelName: 'prototype_product'
})
