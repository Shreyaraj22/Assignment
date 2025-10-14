import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from './components/Login'
import Signup from './components/Signup';
import VerificationPage from './components/VerificationPage';
import SetPasswordPage from './components/SetPasswordPage'
import ForgotPasswordPage from './components/ForgotPasswordPage';
import NasLogo from './components/NasLogo'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Login/></div>,
  },
  {
    path: "/Signup",
    element: <div><Signup/></div>,
  },
  {
    path: "/Verification",
    element: <div><VerificationPage/></div>,
  },
  {
    path: "/SetPasswordPage",
    element: <div><SetPasswordPage/></div>,
  },
  {
    path: "/ForgotPasswordPage",
    element: <div><ForgotPasswordPage/></div>,
  },
  {
    path: "/NasLogo",
    element: <div><NasLogo/></div>,
  },
]);

const App = () => {
  return (
    <div>

     <RouterProvider router={router} />,

    </div>
  )
}

export default App