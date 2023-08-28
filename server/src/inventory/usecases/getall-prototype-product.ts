import { PrototypeProductMap } from '@core/models/maps/prototype-product'
import { PrototypeProductResponseModel } from '@inventory/models/response/prototype-product-res'
import { GetAllPrototypeProductIP } from '@inventory/ports/input/get-prototype-product'
import { FetchAllPrototypeProductOP } from '@inventory/ports/output/fetchall-prototype-product'

export default class GetAllPrototypeProductUC implements GetAllPrototypeProductIP {
  constructor (
    private readonly service: FetchAllPrototypeProductOP
  ) {}

  private trasnformRepositoryToDomain (product: PrototypeProductMap): PrototypeProductResponseModel {
    return {
      id: product.id,
      categoryName: product.categoryName,
      prototypeName: product.prototypeName,
      prototypeRef: product.prototypeRef
    }
  }

  async exec (): Promise<PrototypeProductResponseModel[]> {
    try {
      const products = await this.service.fetchAll()
      return products.map(p => this.trasnformRepositoryToDomain(p))
    } catch (error) {
      throw new Error('Prototype Product Fetching Failed')
    }
  }
}
