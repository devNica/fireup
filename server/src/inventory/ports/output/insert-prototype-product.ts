import { PrototypeProductInsertDAOModel } from '@inventory/models/dto/prototype-product-dto'

export interface InsertPrototypeProductOP {
  insert: (prototypeProduct: PrototypeProductInsertDAOModel) => Promise<void>
}
