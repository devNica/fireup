import { PrototypeProductRegRequestModel } from '@inventory/models/request/prototype-product-req'

export interface RegisterPrototypeProductIP {
  exec: (data: PrototypeProductRegRequestModel) => Promise<void>
}
