export const startup = ({ server }) => {
  return {
    async start () {
      await server.start()
    }
  }
}
