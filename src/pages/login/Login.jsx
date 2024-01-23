import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="login-wrapper">
          <div className="logo">
            <h1>ANTEX</h1>
            <h1 className="version">2.0</h1>
          </div>
          <div className="register-section">
            <h2>Войти</h2>
            <p>Управляйте компанией в один клик</p>
            <input
              name="Email"
              class="input"
              type="email"
              placeholder="email"
            />
            <input
              name="Email"
              class="input"
              type="email"
              placeholder="password"
            />
            <Link>
              <p className="hy">Забыли пароль?</p>
            </Link>
            <Link>
              <button>Войти</button>
            </Link>
          </div>
          <span className="register-bg"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
