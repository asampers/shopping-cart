import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root'
import Shop from './routes/Shop';
import About from './routes/About'
import ErrorPage from './error-page';
import Homepage from './routes/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path='/'
      element={<Root />}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Homepage />} />
        <Route 
          path='shop'
          element={<Shop />}
        />
        <Route 
          path='/about'
          element={<About />}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
