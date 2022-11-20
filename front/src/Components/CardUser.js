import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

function CardUser({ user }) {
  const url = `http://localhost:9000/api/user/`;
  const handleDelete = () => {
    if (window.confirm("are you sure you want to delete this user")) {
      axios
        .delete(`${url}${user._id}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    window.location.reload();
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{user.userName}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.age}</Card.Text>
        <Button variant="danger" onClick={handleDelete}>
          deleted
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardUser;
