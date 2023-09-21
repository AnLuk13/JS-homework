import "./App.css";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import UserCard from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .create({
        baseURL: "https://dummyjson.com",
      })
      .get("/products")
      .then((response) => {
        console.log(response);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      {products.map((product) => (
        <UserCard product={product} key={product.id}></UserCard>
      ))}
    </div>
  );
}

export default App;
