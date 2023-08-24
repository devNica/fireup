import { UUID } from '@shared/custom-types'

export interface ProductEntity {
  id?: UUID
  reference: string
  productName: string
  description: string
  partNumber: string
  minInventory: number
  maxInventory: number
  isActive?: boolean
  applyTax: boolean
  hasImage: boolean
  createdAt?: Date
  updatedAt?: Date
  categoryId: number
  brandId: number
}
