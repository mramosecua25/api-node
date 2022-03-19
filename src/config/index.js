import dotenv from 'dotenv'

import dev from './dev'
import prod from './prod'

dotenv.config()

const environment = process.env.NODE_ENV || 'development'

let config = {}

switch (environment) {
  case 'dev':
  case 'development':
    config = dev(process)
    break
  case 'producción':
  case 'prod':
    config = prod(process)
    break
  default:
    config = dev(process)
}

export {
  config
}
