import { useState } from "react";
import { ShowPasswordIcon, HidePasswordIcon } from "../../passwordIcons";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { TextFieldProps } from "../../../../interfaces";

import "./textField.scss";

const TextField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  autoFocus,
  validatePasswordStrength,
}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const tooltip = (
    <Tooltip id="tooltip" className="custom-tooltip">
      {showPassword ? "hide password" : "show password"}
    </Tooltip>
  );

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="text-field">
      <label className="text-field__label" htmlFor={name}>
        {label}
      </label>
      <div className="text-field__wrapper">
        <input
          autoFocus={autoFocus}
          className="text-field__input"
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          required
          onChange={onChange}
          onInput={validatePasswordStrength}
        />
        {type === "password" && (
          <OverlayTrigger
            placement="top"
            overlay={tooltip}
            popperConfig={{
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 15],
                  },
                },
              ],
            }}
          >
            <span
              className="text-field__password-icon"
              onClick={toggleShowPassword}
            >
              {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
            </span>
          </OverlayTrigger>
        )}
      </div>
    </div>
  );
};

export default TextField;
