import { HttpResponseModel, HttpStatusMap } from '@core/models/http/http-requets'
import { ControllerOutputPort } from '@core/ports/output/controllers/controller-op'

export class GenericSuccessResponsePresenter<T> implements ControllerOutputPort<T> {
  async handleResponse (body: T, message: string): Promise<HttpResponseModel<T>> {
    return {
      statusCode: HttpStatusMap.successRequest,
      body,
      message
    }
  }
}
