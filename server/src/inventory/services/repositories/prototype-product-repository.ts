/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { RepositoryErrorAdapter } from '@core/adapters/primary/errors/repository-error-adapter'
import { PrototypeProductMap } from '@core/models/maps/prototype-product'
import { PrototypeProductRepositoryOP } from '@core/ports/output/repositories/prototype-product-repository-op'
import { PrototypeProductInsertDAOModel } from '@inventory/models/dto/prototype-product-dto'
import { FetchAllPrototypeProductOP } from '@inventory/ports/output/fetchall-prototype-product'
import { InsertPrototypeProductOP } from '@inventory/ports/output/insert-prototype-product'

export class PrototypeProductRepositoryService implements InsertPrototypeProductOP, FetchAllPrototypeProductOP {
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

  async fetchAll (): Promise<PrototypeProductMap[]> {
    try {
      const rows = await this.repository.fetchAll()
      if (!rows) throw new Error('')
      const result = rows.map(function (r): PrototypeProductMap {
        return {
          id: r.id,
          prototypeRef: r.prototypeRef,
          prototypeName: r.prototypeName,
          isActive: r.isActive,
          categoryId: r.categoryId,
          categoryName: r.categoryName
        }
      })
      return result
    } catch (error) {
      throw new RepositoryErrorAdapter(String(error))
    }
  }
}
