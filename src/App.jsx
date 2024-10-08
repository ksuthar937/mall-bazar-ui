import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import Products from "./components/products";
import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./components/cart";
import Checkout from "./components/checkout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route index element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
