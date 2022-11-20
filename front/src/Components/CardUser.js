import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardUser({user}) {
    const handleDelete=()=> {
        alert()
    }
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{user.userName}</Card.Title>
      <Card.Text>
      {user.email}
      </Card.Text>
      <Card.Text>
      {user.age}
      </Card.Text>
      <Button variant="danger" onClick={handleDelete}>deleted</Button>
    </Card.Body>
  </Card>
  )
}

export default CardUser