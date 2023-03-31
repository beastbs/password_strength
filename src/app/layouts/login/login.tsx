import LoginForm from "../../components/ui/loginForm";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
