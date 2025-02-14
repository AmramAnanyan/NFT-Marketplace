import Error404Page from 'pages/Error-Page/error-404';
import HomePage from 'pages/HomePage';
import { RouteObject } from 'react-router';
import { HARD_CODE_ROUTES } from 'shared/constants/routes';
import ProtectedRoute from 'shared/ui/ProtectedRoute';
import ToastProvider from 'shared/ui/Toast/ToastProvider';
import WrapperNavbar from 'widgets/WrapperNavbar';

const useGenerateRoutes = () => {
  const defaultRoutes: RouteObject[] = [];
  defaultRoutes.push({
    path: '/',
    element: <WrapperNavbar />,
    errorElement: <Error404Page />,
    children: [{ path: '/', element: <HomePage /> }]
  });
  HARD_CODE_ROUTES.forEach(({ path, isPrivate, component: Component }) => {
    defaultRoutes[0].children?.push({
      path: path,
      element: (
        <ProtectedRoute isPrivate={isPrivate}>
          <ToastProvider>
            <Component />
          </ToastProvider>
        </ProtectedRoute>
      )
    });
  });
  return { defaultRoutes };
};

export default useGenerateRoutes;
