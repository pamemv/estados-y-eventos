import { useState } from "react";
import { Formulario } from "./Formulario";
import Stack from "react-bootstrap/Stack";
import Alert from "./Alert";
import SocialButton from "./SocialButton";

export const Registro = () => {
  const [alert, setAlert] = useState({
    color: "",
    msg: "",
  });

  return (
    <Stack
      gap={2}
      className="col-md-3 mx-auto rounded-4 p-5"
      style={{ background: "white", marginTop: 70 }}
    >
      <h2>Crear una cuenta</h2>
      <Stack gap={3} direction="horizontal" className="mx-auto">
        <SocialButton
          icon="fa-brands fa-facebook"
          path="https://www.facebook.com"
        />
        <SocialButton
          icon="fa-brands fa-github"
          path="https://www.github.com"
        />
        <SocialButton
          icon="fa-brands fa-linkedin"
          path="https://www.linkedin.com"
        />
      </Stack>
      {/*Componente SocialButtons*/}
      {/*Componente Formulario*/}
      <label>O usa tu email para registrarte</label>
      <Formulario setAlert={setAlert} />
      {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
    </Stack>
  );
};
