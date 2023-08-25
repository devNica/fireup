import { RequestValidationErrorAdapter } from '@core/adapters/primary/errors/request-validation-error-adapter'
import { HttpResponseModel } from '@core/models/http/http-requets'
import { HttpRequestModel } from '@core/models/http/http-response'
import { ControllerInputPort } from '@core/ports/input/controllers/controller-ip'
import { ControllerOutputPort } from '@core/ports/output/controllers/controller-op'
import { PrototypeProductRegRequestModel } from '@inventory/models/request/prototype-product-req'
import RegisterPrototypeProductUC from '@inventory/usecases/register-protype-product'
import { objectKeyExists } from '@shared/object/object-key-exists'

export default class RegisterPrototypeProductController implements ControllerInputPort<{}> {
  constructor (
    private readonly usecase: RegisterPrototypeProductUC,
    private readonly presenter: ControllerOutputPort<{}>
  ) {}

  async handleRequest (request: HttpRequestModel<PrototypeProductRegRequestModel>): Promise<HttpResponseModel<{}>> {
    try {
      if (!objectKeyExists(request, 'body')) {
        throw new RequestValidationErrorAdapter('Invalid Requests')
      }

      const { prototypeRef, prototypeName, categoryId } = request.body

      await this.usecase.exec({ prototypeRef, prototypeName, categoryId })
      return await this.presenter.handleResponse({}, 'Prototype Product Registrarion Successfull')
    } catch (error) {
      throw new RequestValidationErrorAdapter(String(error))
    }
  }
}
