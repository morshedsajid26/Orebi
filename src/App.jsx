import React from 'react'







import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from './Components/Layer/RootLayOut';
import Home from './Components/Page/Home';
import About from './Components/Page/About';
import Contacts from './Components/Page/Contacts';
import Journal from './Components/Page/Journal';
import Shop from './Components/Page/Shop';
import SignUp from './Components/Page/SignUp';
import LogIn from './Components/Page/LogIn';
import ProductDetails from './Components/Page/ProductDetails';
import ListStyle from './Components/Page/ListStyle';
import Cart from './Components/Page/Cart';
import Error from './Components/Page/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home/>}/>
      <Route path='/products/' element={<Shop/>}/>
      <Route path='/about/' element={<About/>}/>
      <Route path='/contacts/' element={<Contacts/>}/>
      <Route path='/journal/' element={<Journal/>}/>
      <Route path='/sign/up' element={<SignUp/>}/>
      <Route path='/login/' element={<LogIn/>}/>
      <Route path='/product/details' element={<ProductDetails/>}/>
      <Route path='/test' element={<ListStyle/>}/>
      <Route path='/cart/' element={<Cart/>}/>
      <Route path='/error' element={<Error/>}/>





    </Route>
  )
);








const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App