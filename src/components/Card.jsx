import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

const MemeCard = (props) => {
  return (
      <Card style={{ width: '18rem',margin:'25px'}}>
      <Card.Img className='p-2' variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Link to={`/edit?url=${encodeURIComponent(props.img)}`}>
        <Button
        variant="primary">Edit</Button>
        </Link>
      </Card.Body>
    </Card>
    
  );
}

export default MemeCard;