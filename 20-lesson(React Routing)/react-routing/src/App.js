import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import ListLayout from "./ListLayout";
import RouterLayout from "./RouterLayout";
import Card from "./pages/Card";
import Register from "./pages/Register";
import Main from "./pages/Main";
import ItemList, { fetchProducts } from "./pages/List";
import Item, { fetchProductsDetails } from "./pages/Item";
import Error from "./pages/Error";
import "./router.css";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterLayout />}>
      <Route path="/" element={<Main />} />
      <Route path="/card" element={<Card />} />
      <Route path="/register" element={<Register />} />
      <Route path="/list" element={<ListLayout />}>
        <Route index element={<ItemList />} loader={fetchProducts} />
        <Route path=":id" element={<Item />} loader={fetchProductsDetails} />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
