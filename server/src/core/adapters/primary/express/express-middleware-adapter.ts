import { ApplicationErrorModel } from '@core/models/errors/application-error-model'
import { MiddlewareExpressInputPort } from '@core/ports/input/middlewares/middleware-input-port'
import { NextFunction, Request, Response } from 'express'

export function expressMiddlewareAdapter (middleware: MiddlewareExpressInputPort) {
  return async (request: Request, _response: Response, next: NextFunction) => {
    return await Promise.resolve(
      middleware.handleRequest({
        body: request.body,
        params: request.params,
        query: request.query,
        headers: request.headers,
        method: request.method
      })
        .then(() => next())
        .catch((error: ApplicationErrorModel) => {
          return next(error)
        })
    )
  }
}
