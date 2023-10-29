import Button from "react-bootstrap/Button";

const SocialButton = ({ icon, path }) => {
  return (
    <Button
      className="rounded-circle"
      size="lg"
      variant="outline-dark"
      href={path}
      target="_blank"
    >
      <i className={icon}></i>
    </Button>
  );
};

export default SocialButton;
