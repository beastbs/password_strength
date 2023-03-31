import { StrengthMeterProps } from "../../../interfaces";
import "./strengthMeterPassword.scss";

const StrengthMeterPassword = ({
  passwordData,
  passwordBackground,
}: StrengthMeterProps) => {
  const { easyPassword, mediumPassword, strongPassword, passwordDescription } =
    passwordData;

  const getClasses = (id: string) => {
    if (passwordBackground === "gray-bg") return "gray-bg";
    if (passwordBackground === "success-bg") return "success-bg";
    if (passwordBackground === "danger-bg") return "danger-bg";

    if (easyPassword && !mediumPassword) {
      if (id === "easy-password") return "danger-bg";
      if (id === "medium-password") return "gray-bg";
      if (id === "strong-password") return "gray-bg";
    }

    if (easyPassword && mediumPassword) {
      if (id === "easy-password") return "warning-bg";
      if (id === "medium-password") return "warning-bg";
      if (id === "strong-password") return "gray-bg";
    }

    if (strongPassword && easyPassword && mediumPassword) return "success-bg";
  };

  return (
    <div className="strength-meter">
      <div className="strength-meter__wrapper">
        <span
          id="easy-password"
          className={`strength-meter__item ${getClasses("easy-password")}`}
        ></span>
        <span
          id="medium-password"
          className={`strength-meter__item ${getClasses("medium-password")}`}
        ></span>
        <span
          id="strong-password"
          className={`strength-meter__item ${getClasses("strong-password")}`}
        ></span>
      </div>
      <p className={`strength-meter__description`}>{passwordDescription}</p>
    </div>
  );
};

export default StrengthMeterPassword;
