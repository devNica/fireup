import { PrototypeProductMap } from '@core/models/maps/prototype-product'

export interface PrototypeProductResponseModel extends Omit<PrototypeProductMap, 'categoryId'> {}
