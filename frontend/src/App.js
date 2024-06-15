import React from 'react';
import LandingPage from './pages/LandingPage/landingpage';
import { LoginForm } from './components/Login/login';
import Signup from './components/SignUp/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <Signup />,
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
