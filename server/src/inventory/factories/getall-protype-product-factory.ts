import { GenericSuccessResponsePresenter } from '@core/adapters/primary/presenter/generic-success-response'
import { ControllerInputPort } from '@core/ports/input/controllers/controller-ip'
import GetAllPrototypeProductController from '@inventory/adapters/primary/controllers/getall-prototype-product'
import { PrototypeProductResponseModel } from '@inventory/models/response/prototype-product-res'
import { fetchAllPrototypeProductSP } from '@inventory/services/repositories'
import GetAllPrototypeProductUC from '@inventory/usecases/getall-prototype-product'

function factory (): ControllerInputPort {
  const usecase = new GetAllPrototypeProductUC(
    fetchAllPrototypeProductSP
  )

  const presenter = new GenericSuccessResponsePresenter<PrototypeProductResponseModel[]>()

  return new GetAllPrototypeProductController(
    usecase,
    presenter
  )
}

export const getAllPrototypeProductController = factory()
