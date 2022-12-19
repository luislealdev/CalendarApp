import { useEffect } from "react";
import Swal from "sweetalert2";
import { useAuthStore } from "../../hooks";
import { useForm } from "../../hooks/useForm";
import "./loginPage.css";

const loginForm = {
  loginEmail: "",
  loginPassword: "",
};

const registerForm = {
  registerName: "",
  registerEmail: "",
  registerPassword1: "",
  registerPassword2: "",
};

export const LoginPage = () => {
  const { startLogin, startRegistering, errorMessage } = useAuthStore();

  useEffect(() => {
    if (errorMessage !== undefined)
      Swal.fire(
        "Error with authentication",
        errorMessage,
        "error"
      );
  }, [errorMessage]);

  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginForm);

  const onLoginSubmit = (e) => {
    e.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };

  const {
    registerName,
    registerEmail,
    registerPassword1,
    registerPassword2,
    onInputChange: onRegisterInputChange,
  } = useForm(registerForm);

  const onRegisterSubmit = (e) => {
    e.preventDefault();

    if (registerPassword1 == registerPassword2)
      startRegistering({
        name: registerName,
        email: registerEmail,
        password: registerPassword1,
      });
    else
      Swal.fire("Error with register", "Passwords are not the same", "error");
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={onLoginSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                value={loginEmail}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={loginPassword}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={onRegisterSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="registerName"
                value={registerName}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                value={registerEmail}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword1"
                value={registerPassword1}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPassword2"
                value={registerPassword2}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
