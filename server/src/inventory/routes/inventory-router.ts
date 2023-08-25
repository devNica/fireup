/* eslint-disable @typescript-eslint/no-misused-promises */
import { expressRouteAdapter } from '@core/adapters/primary/express/express-route-adapter'
import { registerPrototypeProductController } from '@inventory/factories/register-prototype-product-factory'
import { Router } from 'express'

const inventoryRouter = Router()

inventoryRouter.post('/prototype-product', expressRouteAdapter(registerPrototypeProductController))

export default inventoryRouter
