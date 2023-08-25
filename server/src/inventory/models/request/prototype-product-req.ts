import { PrototypeProductEntity } from '@core/models/entities/prototype-product'

export interface PrototypeProductRegRequestModel extends
  Pick<PrototypeProductEntity, 'prototypeRef' | 'prototypeName' | 'categoryId'> {}
