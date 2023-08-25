import { RepositoryErrorAdapter } from '@core/adapters/primary/errors/repository-error-adapter'
import { PrototypeProductRepositoryOP } from '@core/ports/output/repositories/prototype-product-repository-op'
import { PrototypeProductInsertDAOModel } from '@inventory/models/dto/prototype-product-dto'
import { InsertPrototypeProductOP } from '@inventory/ports/output/insert-prototype-product'

export class PrototypeProductRepositoryService implements InsertPrototypeProductOP {
  constructor (
    private readonly repository: PrototypeProductRepositoryOP
  ) {}

  async insert (prototypeProduct: PrototypeProductInsertDAOModel): Promise<void> {
    try {
      await this.repository.insert(prototypeProduct)
    } catch (error) {
      throw new RepositoryErrorAdapter(String(error))
    }
  }
}
