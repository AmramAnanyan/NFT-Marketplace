import { lazy } from 'react';
import { RouteType } from 'shared/types/routeType';

export const HARD_CODE_ROUTES: Array<RouteType> = [
  {
    path: '/ranking',
    props: null,
    component: lazy(() => import('pages/RankingPage')),
    isPrivate: true
  },
  {
    path: '/sign-in',
    props: null,
    component: lazy(() => import('pages/LoginPage')),
    isPrivate: false
  },
  {
    path: '/sign-up',
    props: null,
    component: lazy(() => import('pages/RegistrationPage')),
    isPrivate: false
  },
  {
    path: '/profile',
    props: null,
    component: lazy(() => import('pages/UserPage')),
    isPrivate: false
  }
];
