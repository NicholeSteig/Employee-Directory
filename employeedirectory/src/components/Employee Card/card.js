import React from "react";

function Card(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <ul>
                        <li>Email: {props.email}</li>
                        <li>Phone: {props.phone}</li>
                        <li>Cell Phone: {props.cell}</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Card;