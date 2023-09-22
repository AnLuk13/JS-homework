import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";

function Item() {
  const { id } = useParams();
  const product = useLoaderData();
  return (
    <div style={{ width: "400px" }}>
      <div
        style={{
          backgroundColor: "azure",
          padding: "10px",
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      >
        You selected {id} : {product.title}
      </div>
      <div style={{ marginBottom: "20px" }}>{product.description}</div>
      <div>
        <img src={product.thumbnail} alt="" />
      </div>
    </div>
  );
}

export const fetchProductsDetails = ({ params }) => {
  return axios
    .get("https://dummyjson.com/products/" + params.id)
    .then((response) => {
      const product = response.data;
      console.log("Fetched product:", product);
      return product;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

export default Item;
