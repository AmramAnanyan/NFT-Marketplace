import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import useGenerateRoutes from 'shared/hooks/useGenerateRoutes'

const Routes = () => {
  const { defaultRoutes } = useGenerateRoutes()
  const routes = createBrowserRouter(defaultRoutes, {
    future: { v7_normalizeFormMethod: true }
  })
  return <RouterProvider router={routes} />
}

export default Routes
