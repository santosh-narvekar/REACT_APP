import { About,Cart,Checkout,Error,HomeLayout,Landing,Login,Orders,Products,SingleProduct,Register } from "./pages"


import {ErrorElement} from './components'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
// loaders
import {loader as LandingLoader} from './pages/Landing'
import {loader as SingleProductLoader} from './pages/SingleProduct';
import {loader as ProductsLoader} from './pages/Products'
// actions
import {action as registerAction} from '../src/pages/Register'

import {action as loginAction} from '../src/pages/Login'
import {action as CheckoutAction} from '../src/components/CheckoutForm'
import {loader as checkoutLoader} from '../src/pages/Checkout'
import {loader as LoginLoader} from '../src/pages/Login'
import {loader as ordersLoader} from './pages/Orders';
import { store } from "./store";



const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing />,
        errorElement:<ErrorElement/>,
        loader:LandingLoader
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'products',
        element:<Products/>,
        errorElement:<ErrorElement/>,
        loader:ProductsLoader,
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'Checkout',
        element:<Checkout/>,
        loader:checkoutLoader(store),
        action:CheckoutAction(store)
      },
      {
        path:'orders',
        element:<Orders />,
        loader:ordersLoader(store)
      },
      {
        path:'products/:id',
        element:<SingleProduct/>,
        loader:SingleProductLoader
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<Error/>,
    action:loginAction(store),
    loader:LoginLoader(store)
  },
  {
    path:'/register',
    element:<Register />,
    errorElement:<Error />,
    action:registerAction
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
