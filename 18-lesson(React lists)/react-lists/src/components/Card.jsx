import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Card.scss";

function UserCard({ data }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/id/277/100/" />
      <Card.Body>
        <Card.Title>{data.username}</Card.Title>
        <Card.Text className={data.isActive ? "hidden" : "activity"}>
          Inactive
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
