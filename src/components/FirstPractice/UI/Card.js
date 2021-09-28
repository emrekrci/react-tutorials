import React from "react";
import cardStyle from '../UI/Card.module.css';

const Card = props => {
    return (
        <div className={`${cardStyle.card} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Card;