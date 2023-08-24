import { UUID } from '@shared/custom-types'

export interface FileEntity {
  filename: UUID
  filesize: number
  filetype: string
  binary: Buffer
}
