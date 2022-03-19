import { createContainer, asFunction, asValue } from 'awilix'

import { config } from '../config'
import { guyWire } from 'bootstrap/guywire'
import { factory } from 'shared/helpers/factory'

import { server } from './server'
import { startup } from './startup'

const container = createContainer()

container
  .register({
    config: asValue(config),
    guyWire: asFunction(guyWire).singleton(),
    server: asFunction(server).singleton(),
    app: asFunction(startup).singleton()
  })
  .register({
    factory: asFunction(factory).singleton()
  })

export { container }
