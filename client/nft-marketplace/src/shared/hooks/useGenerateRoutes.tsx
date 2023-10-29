import Error404Page from 'pages/Error-Page/error-404'
import HomePage from 'pages/HomePage'
import { LazyExoticComponent, lazy } from 'react'
import { RouteObject } from 'react-router'
import ProtectedRoute from 'shared/ui/ProtectedRoute'

type RouteType = {
  path: string
  component: LazyExoticComponent<any>
  props: any
  isPrivate: boolean
}

const defaultRoutes: RouteObject[] = []
const HARD_CODE_ROUTES: Array<RouteType> = [
  {
    path: '/ranking',
    props: null,
    component: lazy(() => import('pages/RankingPage')),
    isPrivate: true
  }
]
const useGenerateRoutes = () => {
  defaultRoutes.push({
    path: '/',
    element: <HomePage />,
    errorElement: <Error404Page />
  })
  HARD_CODE_ROUTES.forEach((item) => {
    defaultRoutes.push({
      path: item.path,
      element: (
        <ProtectedRoute isPrivate={item.isPrivate}>
          <item.component />
        </ProtectedRoute>
      )
    })
  })

  return { defaultRoutes }
}

export default useGenerateRoutes
