export interface PrototypeProductEntity {
  id?: number
  prototypeRef: string
  prototypeName: string
  isActive?: boolean
  createdAt?: Date
  updatedAt?: Date
  categoryId: number
}
