import { Path } from 'typescript';
// types and interfaces for Navbar
type Brand = {
  title: string;
};
type UserStatus = {
  title: string;
  status: 'GUEST' | 'USER';
};
interface INavigation {
  id: string | number;
  title: string;
  active?: boolean;
  isLogin?: boolean;
  path: string;
  subTitles?: INavigation[];
}
export interface INavBar {
  brand: Brand;
  navigations: Array<INavigation>;
}
export interface IFooter {
  navigations: Array<INavigation>;
}
///////////////////////////

export const enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MODERATOR = 'MODERATOR'
}

export interface IUser {
  email: string;
  name?: string;
  password: string;
  avatarUrl?: string;
  totalSales?: number;
  currency?: string;
  role: UserRole;
  isActive: boolean;
  ratingIndex: number;
  lastLoginAt?: Date;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  cryptoValet: string;
  price: number;
  highestBid: number;
}

export interface IColection {
  id: string;
  name: string;
}

export interface ICollection {
  title: string;
  description: string;
  creator: IUser;
  nfts: INFT;
  collectionImage?: string;
}
export interface INFT {
  title: string;
  description: string;
  image: string;
  price: number;
  creator: IUser;
  nftCollection?: ICollection;
  createdAt?: Date;
  updatedAt?: Date;
}
