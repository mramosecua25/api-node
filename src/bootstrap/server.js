import express from 'express'

export const server = ({ config }) => {
  const _express = express()

  // _express.use(router)

  return {
    start: () => {
      return new Promise((resolve, reject) => {
        const http = _express.listen(config.port, () => {
          const { port } = http.address()
          console.log('Application running on port ' + port)
          resolve()
        })
      })
    }
  }
}
