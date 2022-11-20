import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { Login } from './login';
import { Browse, MainApp, ThemeEditor } from './main-app';
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
        {
          path: "browse",
          element: <Browse />,
        },
        {
          path: "edit/:id",
          element: <ThemeEditor />,
          loader: ({}) => {
            return Promise.resolve({
              primaryColor: "#0000ff",
              secondaryColor: "#0088ff",
              errorColor: "#ff0000",
              warningColor: "#ff8800",
            });
          },
          action: () => {},
        },
      ],
    },
    {
      index: true,
      element: <Navigate to="/home" replace />
    }
  ]);

  return (
    <RouterProvider fallbackElement={"loading"} router={router} />
  );
}

export default App;
