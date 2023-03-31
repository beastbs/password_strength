import { useState, useEffect, ChangeEvent, SyntheticEvent } from "react";
import Heading from "../../common/heading";
import TextField from "../../common/form/textField";
import Button from "../../common/button/button";
import StrengthMeterPassword from "../../common/strengthMeterPassword";
import { PasswordDataProps } from "../../../interfaces";

import "./loginForm.scss";

const LoginForm = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const [passwordData, setPasswordData] = useState<PasswordDataProps>({
    easyPassword: false,
    mediumPassword: false,
    strongPassword: false,
    passwordDescription: "Password is Empty",
  });
  const [passwordBackground, setPasswordBackground] = useState("gray-bg");

  useEffect(() => {
    setPasswordBackground(calculatePasswordStrength(data.password));
  }, [passwordData, data.password]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleClick = () => {
    console.log(data);
  };

  const handleReset = () => {
    setData({
      name: "",
      password: "",
    });
    setPasswordData((prevState) => ({
      ...prevState,
      passwordDescription: "Password is Empty",
    }));
  };

  const handlePasswordDataUpdate = (data: PasswordDataProps) => {
    setPasswordData((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const calculatePasswordStrength = (password: string) => {
    if (password.length === 0) {
      return "gray-bg";
    }
    if (password.length < 8) {
      return "danger-bg";
    }
    if (
      passwordData.easyPassword &&
      passwordData.mediumPassword &&
      passwordData.strongPassword
    ) {
      return "success-bg";
    }
    return "warning-bg";
  };

  const validatePasswordStrength = (event: ChangeEvent<HTMLInputElement>) => {
    const passwordValue = event.target.value;
    const passwordLength = passwordValue.length;

    const easyRegExp = /[a-z]|[A-Z]/;
    const mediumRegExp = /(?=.*?[0-9])/;
    const strongRegExp = /(?=.*?[#?!@$%^&*-])/;

    const easyPassword = easyRegExp.test(passwordValue);
    const mediumPassword = mediumRegExp.test(passwordValue);
    const strongPassword = strongRegExp.test(passwordValue);

    if (passwordValue === "") {
      handlePasswordDataUpdate({ passwordDescription: "Is Empty" });
    } else {
      if (passwordLength < 8) {
        handlePasswordDataUpdate({
          passwordDescription: "Minimum 8 characters",
        });
      } else {
        if (easyPassword && mediumPassword && strongPassword) {
          handlePasswordDataUpdate({
            strongPassword: true,
            passwordDescription: "Strong",
          });
          return;
        } else {
          handlePasswordDataUpdate({ strongPassword: false });
        }
        if (
          (easyPassword && (mediumPassword || strongPassword)) ||
          (strongPassword && (easyPassword || mediumPassword))
        ) {
          handlePasswordDataUpdate({
            mediumPassword: true,
            passwordDescription: "Medium",
          });
          return;
        } else {
          handlePasswordDataUpdate({ mediumPassword: false });
        }
        if (easyPassword || mediumPassword || strongPassword) {
          handlePasswordDataUpdate({
            easyPassword: true,
            passwordDescription: "Easy",
          });
          return;
        }
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Heading text="Login" />
      <TextField
        label="Name"
        name="name"
        value={data.name}
        onChange={handleChange}
        autoFocus={true}
      />
      <TextField
        label="Password"
        name="password"
        value={data.password}
        onChange={handleChange}
        type="password"
        validatePasswordStrength={validatePasswordStrength}
      />
      <StrengthMeterPassword
        passwordData={passwordData}
        passwordBackground={passwordBackground}
      />
      <Button
        text="Submit"
        className="primary"
        size="small"
        onClick={handleClick}
        disabled={passwordData.easyPassword}
      />
      <Button
        text="Reset"
        className="danger"
        size="small"
        type="reset"
        onClick={handleReset}
      />
    </form>
  );
};

export default LoginForm;
