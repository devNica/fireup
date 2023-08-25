import { FileEntity } from '@core/models/entities/file-entity'
import { UUID } from '@core/models/types/custom-types'
import sequelizeInstance from '@core/frameworks/sequelize/database-connection'
import { DataTypes, Model } from 'sequelize'

interface FileAttrInput extends Required<FileEntity> {}

export default class FileModel extends Model<FileEntity, FileAttrInput> implements FileEntity {
  filename: UUID
  filesize: number
  filetype: string
  binary: Buffer
}

FileModel.init({
  filename: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4
  },
  filesize: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  filetype: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  binary: {
    type: DataTypes.BLOB(),
    allowNull: false
  }
}, {
  sequelize: sequelizeInstance,
  modelName: 'file'
})
