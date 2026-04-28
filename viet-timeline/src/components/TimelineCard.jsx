import React from 'react';
import { Card } from 'react-bootstrap';
import Typewriter from './Typewriter';
import './TimelineCard.css';

export default function TimelineCard({ item, index, active, focused, exiting }) { 
    const offset = index - active;

    let className = "card-base";

    if (focused) {
    className += " focused";
    } else if (exiting) {
    className += " exiting";
    } else if (offset === 0) {
    className += " active";
    } else if (offset === -1) {
    className += " left";
    } else if (offset === 1) {
    className += " right";
    } else {
    className += " hidden";
    }

    return (
    <div className={`${className} ${focused ? "focused-wrapper" : ""}`}>
        
        <Card className="timeline-card">
        <Card.Img variant="top" src={item.img} className="timelineCard-img" />
        <Card.Body>
            <Card.Title>{item.year}</Card.Title>
            <Card.Text>{item.title}</Card.Text>
        </Card.Body>
        </Card>

        {focused && (
        <div className={`description ${exiting ? "exiting" : ""}`}>
            <Typewriter text={item.description} />
        </div>
        )}
    </div>
    );
}