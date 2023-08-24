import { expressAsyncErrorsAdapter } from '@core/adapters/primary/express/express-async-error-adapter'
import { Application } from 'express'

export async function setupAsyncErrors (app: Application): Promise<void> {
  app.use(expressAsyncErrorsAdapter)
}
