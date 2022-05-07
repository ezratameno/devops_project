import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import classes from "../ui/ErrorModel.module.css"

function ErrorModel(props)
{
    return <div>
        {/* make sure we can't intaract with the background while the model is on */}
                <div className={classes.backdrop}/>

                <Card className={classes.modal}>   
                    <header className={classes.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={classes.content}>
                        <p>
                            {props.messege}
                        </p>
                    </div>
                    <footer className={classes.actions}>
                        <Button onClick={props.onConfirm}>Okay</Button>
                    </footer>
                </Card>
           </div>
}

export default ErrorModel;