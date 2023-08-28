import { RequestValidationErrorAdapter } from '@core/adapters/primary/errors/request-validation-error-adapter'
import { HttpResponseModel } from '@core/models/http/http-requets'
import { HttpRequestModel } from '@core/models/http/http-response'
import { ControllerInputPort } from '@core/ports/input/controllers/controller-ip'
import { ControllerOutputPort } from '@core/ports/output/controllers/controller-op'
import { PrototypeProductResponseModel } from '@inventory/models/response/prototype-product-res'
import GetAllPrototypeProductUC from '@inventory/usecases/getall-prototype-product'

export default class GetAllPrototypeProductController implements ControllerInputPort<PrototypeProductResponseModel[]> {
  constructor (
    private readonly usecase: GetAllPrototypeProductUC,
    private readonly presenter: ControllerOutputPort<PrototypeProductResponseModel[]>
  ) {}

  async handleRequest (_request: HttpRequestModel<void>): Promise<HttpResponseModel<PrototypeProductResponseModel[]>> {
    try {
      const result = await this.usecase.exec()
      return await this.presenter.handleResponse(result, 'Request success')
    } catch (error) {
      throw new RequestValidationErrorAdapter(String(error))
    }
  }
}
