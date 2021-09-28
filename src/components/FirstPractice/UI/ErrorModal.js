import React from "react";
import Card from "./Card";
import Button from "./Button";

import modalStyle from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={modalStyle.backdrop} onClick= {props.onConfirm} />
      <Card className={modalStyle.modal}>
        <header className={modalStyle.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={modalStyle.content}>
          <p>{props.message}</p>
        </div>
        <footer className={modalStyle.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
