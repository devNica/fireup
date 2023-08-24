import { HttpRequestModel } from '../http/http-response'

export interface MiddlewareExpressModel extends HttpRequestModel {
  method?: string
}
