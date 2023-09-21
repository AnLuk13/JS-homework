import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card from "./card.module.css";

function UserCard({ product }) {
  console.log(product);
  return (
    <div>
      <Card key={product.id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/id/277/100/" />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text className={card.text}>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
