import { PrototypeProductEntity } from '@core/models/entities/prototype-product'

export interface PrototypeProductRepositoryOP {
  insert: (data: PrototypeProductEntity) => Promise<void>
}
