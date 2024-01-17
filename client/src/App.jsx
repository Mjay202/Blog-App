
import React from 'react'
import Register from './pages/Register';
import Login from './pages/Login'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Create from './pages/Create';
import SinglePost from './pages/SinglePost';
import './style.scss'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/create',
        element: <Create/>
      },
      {
        path: '/post/:id',
        element: <SinglePost/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  }
]);

const App = () => {
  return (
    <>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}



export default App