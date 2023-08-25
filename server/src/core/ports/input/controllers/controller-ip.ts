import { HttpResponseModel } from '@core/models/http/http-requets'
import { HttpRequestModel } from '@core/models/http/http-response'

export interface ControllerInputPort<T=unknown> {
  handleRequest: (request: HttpRequestModel) => Promise<HttpResponseModel<T>>
}
