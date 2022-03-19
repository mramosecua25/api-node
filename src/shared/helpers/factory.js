import { container } from 'bootstrap/container'

export const factory = () => ({
  get: (name) => container.resolve(name)
})
