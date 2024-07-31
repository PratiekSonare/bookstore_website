import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from '../App';
import Home from '../home/home';
import Shop from '../shop/Shop';
import About from '../components/About';
import Blog from '../components/Blog';
import SingleBook from '../shop/SingleBook';
import DashBoardLayout from '../dashboard/DashBoardLayout';
import Dashboard from '../dashboard/Dashboard';
import UploadBook from '../dashboard/UploadBook';
import ManageBook from '../dashboard/ManageBook';
import EditBook from '../dashboard/EditBook';
import AdminRoute from '../components/AdminRoute'; // Import the AdminRoute component
import AdminLogin from '../components/AdminLogin'; // Import the AdminLogin component
import RequestBook from '../components/RequestBook';

const router = createBrowserRouter([
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
        element: <Shop />,
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
        path: '/requestbook',
        element: <RequestBook />
      },
      {
        index: true, // This will make /home the default route
        element: <Home />,
      }
    ],
  },
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <DashBoardLayout />
      </AdminRoute>
    ), // Protect the dashboard routes with AdminRoute
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
    element: <AdminLogin />, // Admin login route
  }
]);

export default router;
