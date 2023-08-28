import { PrototypeProductMap } from '@core/models/maps/prototype-product'

export interface FetchAllPrototypeProductOP {
  fetchAll: () => Promise<PrototypeProductMap[]>
}
