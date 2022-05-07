import React from "react";
import classes from "../ui/Card.module.css";

function Card(props)
{
    return <div className = {`${classes.card} ${props.className}`}> {props.children}</div>
}

export default Card;