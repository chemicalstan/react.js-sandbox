import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onAcknowledge} className={styles.backdrop} />;
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>{props.message}</div>
      <footer className={styles.actions}>
        <Button onClick={props.onAcknowledge}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop {...props} />,
        document.getElementById("backdrop-wrapper")
      )}
      {ReactDOM.createPortal(
        <Modal {...props} />,
        document.getElementById("modal-wrapper")
      )}
    </>
  );
};

export default ErrorModal;
