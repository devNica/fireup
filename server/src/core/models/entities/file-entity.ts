import { UUID } from '@core/models/types/custom-types'

export interface FileEntity {
  filename: UUID
  filesize: number
  filetype: string
  binary: Buffer
}
