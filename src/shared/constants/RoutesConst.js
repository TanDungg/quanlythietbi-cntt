import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../pages/dashboard';
import Thietbi from '../../pages/thietbi';

const RouterConst = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/thiet-bi',
    element: <Thietbi />,
  },
]);

export default RouterConst;
