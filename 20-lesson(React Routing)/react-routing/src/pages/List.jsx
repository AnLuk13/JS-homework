import axios from "axios";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

function ItemList() {
  const products = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={product.id.toString()}>
            {product.id} : {product.title}
          </Link>
        </div>
      ))}
      <button onClick={goBack}>Go back</button>
    </div>
  );
}

export const fetchProducts = () => {
  return axios
    .create({
      baseURL: "https://dummyjson.com",
    })
    .get("/products")
    .then((response) => {
      console.log(response);
      const products = response.data.products;
      console.log("Fetched products:", products);
      return products;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

export default ItemList;
