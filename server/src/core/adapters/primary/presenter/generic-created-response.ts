import { HttpResponseModel, HttpStatusMap } from '@core/models/http/http-requets'
import { ControllerOutputPort } from '@core/ports/output/controllers/controller-op'

export class GenericCreatedResponsePresenter<T> implements ControllerOutputPort<T> {
  async handleResponse (body: T, message: string): Promise<HttpResponseModel<T>> {
    return {
      statusCode: HttpStatusMap.createdRequest,
      body,
      message
    }
  }
}
