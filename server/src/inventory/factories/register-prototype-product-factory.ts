import { GenericCreatedResponsePresenter } from '@core/adapters/primary/presenter/generic-created-response'
import { ControllerInputPort } from '@core/ports/input/controllers/controller-ip'
import RegisterPrototypeProductController from '@inventory/adapters/primary/controllers/register-prototype-product'
import { insertPrototypeProductSP } from '@inventory/services/repositories'
import RegisterPrototypeProductUC from '@inventory/usecases/register-protype-product'

function factory (): ControllerInputPort {
  const usecase = new RegisterPrototypeProductUC(
    insertPrototypeProductSP
  )

  const presenter = new GenericCreatedResponsePresenter<{}>()

  return new RegisterPrototypeProductController(
    usecase,
    presenter
  )
}

export const registerPrototypeProductController = factory()
