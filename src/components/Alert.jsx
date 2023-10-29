import { Alert as AlertError } from "react-bootstrap";

const Alert = ({ msg, color }) => {
  return <AlertError variant={color}>{msg}</AlertError>;
};

export default Alert;
