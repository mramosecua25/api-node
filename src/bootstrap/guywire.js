export const guyWire = ({ factory }) => {
  return {
    wire () {
      const application = factory.get('app')

      application
        .start()
        .then(() => {
          console.log('ok')
        })
        .catch(err => {
          console.log(err)
          process.exit()
        })
    }
  }
}
