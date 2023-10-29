import { useState } from "react";
import Swal from "sweetalert2";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Formulario = ({ setAlert }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setAlert({
        msg: "Tu nombre no es valido",
        color: "danger",
      });
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Tu nombre no es válido",
        showConfirmButton: false,
      });
    }

    if (email.trim() === "") {
      setAlert({
        msg: "Debes ingresar un email",
        color: "danger",
      });
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Debes ingresar un email",
        showConfirmButton: false,
      });
    }

    if (password != confirmPassword || password === "") {
      setAlert({
        msg: "Las contraseñas no coinciden",
        color: "danger",
      });
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Las contraseñas no coinciden",
        showConfirmButton: false,
      });
    }

    if (
      !(name.trim() === "") &&
      !(password != confirmPassword || password === "") &&
      !(email.trim() === "") &&
      !(name.trim() === "")
    ) {
      setAlert({
        msg: "Registro fue exitoso",
        color: "success",
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registro fue exitoso",
        showConfirmButton: false,
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack gap={3}>
        <Form.Control
          type="text"
          placeholder="Nombre"
          onChange={onChangeName}
        />
        <Form.Control
          type="email"
          placeholder="tuemail@gmail.com"
          onChange={onChangeEmail}
        />
        <Form.Control
          type="password"
          placeholder="Contraseña"
          onChange={onChangePassword}
        />
        <Form.Control
          type="password"
          placeholder="Confirma tu contraseña"
          onChange={onChangeConfirmPassword}
        />
        <Button variant="success" type="submit">
          Registrarse
        </Button>
      </Stack>
    </form>
  );
};
