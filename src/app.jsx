import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainApp } from './main-app';

function App() {
  const router = createBrowserRouter([
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
