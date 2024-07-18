import React from 'react';
import LandingPage from './pages/LandingPage/landingpage';
import Login from './components/Login/login';
import Signup from './components/SignUp/Signup';
import Profile from './components/Profile/Profile';
import ChangeUsername from './components/ChangeUsername/changeUsername';
import NavBar from './components/NavBar/navBar';
import ResetPassword from './components/ResetPassword/resetpassword';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/changeUsername",
    element:<ChangeUsername />,
  },
  // Added this to see what it looked like --> delete later
  {
    path: "/navBar",
    element:<NavBar />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  }
]);

function App() {
  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
