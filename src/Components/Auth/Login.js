import LoginForm from "./LoginForm";

import "./Login.css";

const Login = () => {
  return (
    <main className="main-login">
      <section className="image-section"></section>
      <section className="login-form-section">
        <LoginForm />
      </section>
    </main>
  );
};

export default Login;
