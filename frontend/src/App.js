import LandingPage from './pages/LandingPage/landingpage';
import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    // import landing page
  },
  {
    path: "/log-in",
    // import log in form
  },
  {
    path: "/sign-up",
    // import sign up form
  }
])

function App() {
  return (
      <div className="App">
        <LandingPage />
      </div>
  );
}

export default App;
