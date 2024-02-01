import Renderer from './Renderer'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './Card'
import Section from './Section'
import Tag from './Tag'

const components = [
  Renderer,
  Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent,
  Section,
  Tag,
]

export function registerComponents(app) {
  components.map((item) => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}
