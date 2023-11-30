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
  active?: boolean
  isLogin?: boolean
  path: string
  subTitles?: INavigation[]
}
export interface INavBar {
  brand: Brand
  navigations: Array<INavigation>
}
export interface IFooter {
  navigations: Array<INavigation>
}
///////////////////////////

export interface IUser {
  id: string
  name: string
  image: string
  email: string
  password: string
  totalSales: string | number
  products: Array<any>
  colections: Array<any>
}

export interface IProduct {
  id: string
  name: string
  description: string
  image: string
  cryptoValet: string
  price: number
  highestBid: number
}

export interface IColection {
  id: string
  name: string
}
