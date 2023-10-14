import { Path } from 'typescript'
// types and interfaces for Navbar
type Brand = {
  title: string
}
type UserStatus = {
  title: string
  status: 'GUEST' | 'USER'
}
interface INavigation {
  id: string | number
  title: string
  active: boolean
  isLogin: boolean
  path: string
}
export interface INavBar {
  brand: Brand
  navigations: Array<INavigation>
  userStatus: UserStatus
}
///////////////////////////
