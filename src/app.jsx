import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './login';
import { MainApp } from './main-app';
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
      children: [],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
