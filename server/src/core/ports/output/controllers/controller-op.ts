import { HttpResponseModel } from '@core/models/http/http-requets'

export interface ControllerOutputPort<T> {
  handleResponse: (body: T, message: string) => Promise<HttpResponseModel<T>>
}
