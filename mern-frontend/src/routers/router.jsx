import {
  createBrowserRouter,
} from 'react-router-dom';

import App from '../App';
import Home from '../home/home';
import Shop from '../shop/Shop';
import TempShop from '../shop/TempShop';
import About from '../components/About';
import Blog from '../components/Blog';
import SingleBook from '../shop/SingleBook';
import DashBoardLayout from '../dashboard/DashBoardLayout';
import Dashboard from '../dashboard/Dashboard';
import UploadBook from '../dashboard/UploadBook';
import ManageBook from '../dashboard/ManageBook';
import EditBook from '../dashboard/EditBook';
import AdminRoute from '../components/AdminRoute'; 
import AdminLogin from '../components/AdminLogin';
import RequestBook from '../components/RequestBook';
import UserLogin from '../components/UserLogin';
import UserSignUp from '../components/UserSignUp';
import UserProfile from '../components/ProfileAndCheckout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLogin />,
  },
  {
    path: 'user-signup',
    element: <UserSignUp />
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <TempShop />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'book/:id',
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      },
      {
        path: 'requestbook',
        element: <RequestBook />
      },
      {
        path: 'checkout',
        element: <UserProfile />
      }
    ],
  },
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <DashBoardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: '/admin/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/admin/dashboard/upload',
        element: <UploadBook />,
      },
      {
        path: '/admin/dashboard/manage',
        element: <ManageBook />,
      },
      {
        path: '/admin/dashboard/edit/:id',
        element: <EditBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      },
    ],
  },
  {
    path: '/admin-login',
    element: <AdminLogin />,
  }
]);

export default router;
