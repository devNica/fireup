import { HttpStatusMap } from '@core/models/http/http-requets'
import { DefaultApplicationErrorAdapter } from './default-application-error-adapter'

export class RepositoryErrorAdapter extends DefaultApplicationErrorAdapter {
  name = 'Repository Error'
  statusCode = HttpStatusMap.internalServerErrorRequest
}
