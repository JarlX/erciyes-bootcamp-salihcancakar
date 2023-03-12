import Home from '../views/Home/Home';
import CatAdd from '../views/Content/CatAdd';
import CatDetail from '../views/Content/CatDetail';
import CatUpdate from '../views/Content/CatUpdate';
import CatList from '../views/Content/CatList';
import Login from '../views/Auth/Login';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/category/add',
    element: <CatAdd />,
  },
  {
    path: '/category/detail/:id',
    element: <CatDetail />,
  },
  {
    path: '/category/update/:id',
    element: <CatUpdate />,
  },
  {
    path: '/categoryList',
    element: <CatList />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];
