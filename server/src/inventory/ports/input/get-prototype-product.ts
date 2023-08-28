import { PrototypeProductResponseModel } from '@inventory/models/response/prototype-product-res'

export interface GetAllPrototypeProductIP {
  exec: () => Promise<PrototypeProductResponseModel[]>
}
