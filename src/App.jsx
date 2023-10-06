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
import Checkout from './routes/Checkout';
import Confirm from './routes/Confirm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
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
        <Route 
          path='/checkout'
          element={<Checkout />}
        />
      </Route>
    </Route>
    <Route 
      path='/confirmation'
      element={<Confirm />}
    />
  </>
  )
);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
