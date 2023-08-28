import { ProductCategoryEntity } from '../entities/product-category'
import { PrototypeProductEntity } from '../entities/prototype-product'

export type PrototypeProductMap = PrototypeProductEntity & Pick<ProductCategoryEntity, 'categoryName'>

// export interface PrototypeProductMap {
//   id: number
//   prototypeRef: string
//   prototypeName: string
//   isActive: boolean
//   createdAt?: Date
//   updatedAt?: Date
//   categoryId: number
//   categoryName: string
// }
