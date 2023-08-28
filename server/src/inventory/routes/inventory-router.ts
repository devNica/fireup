/* eslint-disable @typescript-eslint/no-misused-promises */
import { expressRouteAdapter } from '@core/adapters/primary/express/express-route-adapter'
import { getAllPrototypeProductController } from '@inventory/factories/getall-protype-product-factory'
import { registerPrototypeProductController } from '@inventory/factories/register-prototype-product-factory'
import { Router } from 'express'

const inventoryRouter = Router()

inventoryRouter.post('/prototype-product', expressRouteAdapter(registerPrototypeProductController))
inventoryRouter.get('/prototype-product', expressRouteAdapter(getAllPrototypeProductController))

export default inventoryRouter
