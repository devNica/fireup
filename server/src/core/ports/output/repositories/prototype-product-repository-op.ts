import { PrototypeProductEntity } from '@core/models/entities/prototype-product'
import { PrototypeProductMap } from '@core/models/maps/prototype-product'

export interface PrototypeProductRepositoryOP {
  insert: (data: PrototypeProductEntity) => Promise<void>
  fetchAll: () => Promise<PrototypeProductMap[] | never>
}
