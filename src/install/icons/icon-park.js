import { IconPark } from '@icon-park/vue-next/es/all'
import '@icon-park/vue-next/styles/index.css'

// props
// [
//   "size",
//   "strokeWidth",
//   "strokeLinecap",
//   "strokeLinejoin",
//   "theme",
//   "fill",
//   "spin",
//   "type"
// ]
export function setupIconPark(app) {
  app.component(IconPark.name, IconPark)
}
