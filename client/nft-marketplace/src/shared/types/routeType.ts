import { LazyExoticComponent } from 'react'

export type RouteType = {
  path: string
  component: LazyExoticComponent<any>
  props: any
  isPrivate: boolean
}
