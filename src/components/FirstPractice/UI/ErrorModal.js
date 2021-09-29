import React from "react";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

import modalStyle from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={modalStyle.backdrop} onClick={props.onConfirm} />;
};

const OverlayModal = props => {
  return(
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
  )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<OverlayModal title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;
