import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './login';
import { MainApp } from './main-app';
import { Home } from './main-app/home';
import { SignUp } from './sign-up';

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
      children: [],
    },
    {
      path: "/sign-up",
      element: <SignUp />,
      children: [],
    },
    {
      path: "/",
      element: <MainApp />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
