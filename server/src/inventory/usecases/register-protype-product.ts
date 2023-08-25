import { PrototypeProductRegRequestModel } from '@inventory/models/request/prototype-product-req'
import { RegisterPrototypeProductIP } from '@inventory/ports/input/register-prototype-product'
import { InsertPrototypeProductOP } from '@inventory/ports/output/insert-prototype-product'

export default class RegisterPrototypeProductUC implements RegisterPrototypeProductIP {
  constructor (
    private readonly service: InsertPrototypeProductOP
  ) {}

  async exec (data: PrototypeProductRegRequestModel): Promise<void> {
    try {
      await this.service.insert(data)
    } catch (error) {
      throw new Error('Prototype Product Registration Failed')
    }
  }
}
