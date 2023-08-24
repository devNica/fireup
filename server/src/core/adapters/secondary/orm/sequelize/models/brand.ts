import { BrandEntity } from '@core/models/entities/brand-entity'
import sequelizeInstance from '@core/frameworks/sequelize/database-connection'
import { DataTypes, Model, NOW, Optional } from 'sequelize'

interface BrandAttrInput extends Optional<BrandEntity, 'id' | 'isActive' | 'createdAt' | 'updatedAt' > {}

export default class BrandModel extends Model<BrandEntity, BrandAttrInput> implements BrandEntity {
  declare id?: number | undefined
  declare brandName: string
  declare shortRef: string
  declare isActive?: boolean | undefined
  declare createdAt?: Date | undefined
  declare updatedAt?: Date | undefined
}

BrandModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  brandName: {
    type: DataTypes.STRING('50'),
    allowNull: false,
    unique: true
  },
  shortRef: {
    type: DataTypes.STRING(3),
    allowNull: false,
    unique: true
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
  modelName: 'brand'
})
