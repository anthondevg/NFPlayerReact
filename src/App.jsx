import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Login from './pages/Login.page';
import Home from './pages/Home.page';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,

    },
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
